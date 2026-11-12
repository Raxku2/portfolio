import { Show, createEffect, createSignal } from "solid-js";
import { portfolioInfo } from "../../stores";
import { saveProfile, uploadImage } from "../../hooks/dashboard";
import { Button, Field, Hint, Panel, Row, TextArea } from "./ui";

const emptyProfile = () => ({
  name: "",
  role: "",
  dp: "",
  dp_file_id: "",
  location: "",
  hobbies: "",
  uptime: "",
  energy_level: "",
  bio_title: "",
  bio: { part_1: "", part_2: "" },
});

/*
  Account / portfolio identity editor: DP, name, role, location, hobbies,
  uptime, energy level and the bio block shown on the About page.
*/
const ProfilePanel = (props) => {
  const [form, setForm] = createSignal(emptyProfile());
  const [dirty, setDirty] = createSignal(false);
  const [saving, setSaving] = createSignal(false);
  const [uploading, setUploading] = createSignal(false);
  let fileInput;

  // Mirror the store until the operator starts editing.
  createEffect(() => {
    const info = portfolioInfo() || {};
    if (dirty()) return;
    setForm({
      ...emptyProfile(),
      ...info,
      bio: { ...emptyProfile().bio, ...(info.bio || {}) },
    });
  });

  const update = (key, value) => {
    setDirty(true);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateBio = (key, value) => {
    setDirty(true);
    setForm((prev) => ({ ...prev, bio: { ...prev.bio, [key]: value } }));
  };

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const uploaded = await uploadImage(file, "/portfolio/profile");
      await saveProfile({ dp: uploaded.url, dp_file_id: uploaded.fileId });
      setForm((prev) => ({ ...prev, dp: uploaded.url, dp_file_id: uploaded.fileId }));
      props.notify?.("Profile image uploaded");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setUploading(false);
      if (fileInput) fileInput.value = "";
    }
  };

  const save = async () => {
    setSaving(true);
    try {
      await saveProfile({ ...form() });
      setDirty(false);
      props.notify?.("Profile saved");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <Panel title="[ AVATAR_MODULE ]" meta="dp -> imagekit">
        <div class="flex flex-col items-center gap-3 border border-dashed border-outline-variant bg-surface p-4">
          <div class="relative h-28 w-28 border-2 border-primary-fixed bg-surface-container-lowest">
            <Show
              when={form().dp}
              fallback={
                <div class="flex h-full w-full items-center justify-center text-outline-variant">
                  <span class="material-symbols-outlined text-4xl">person</span>
                </div>
              }
            >
              <img
                src={form().dp}
                alt="Profile"
                class="h-full w-full object-cover contrast-125"
              />
            </Show>
            <Show when={uploading()}>
              <div class="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/80 font-label-mono text-[10px] text-primary-fixed">
                UPLOADING...
              </div>
            </Show>
          </div>

          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            class="hidden"
            onChange={(event) => handleUpload(event.currentTarget.files?.[0])}
          />

          <Button
            variant="ghost"
            icon="upload"
            disabled={uploading()}
            onClick={() => fileInput?.click()}
          >
            {uploading() ? "Uploading" : "Replace DP"}
          </Button>
          <Hint>PNG / JPG / WEBP. Saved to ImageKit, URL stored in MongoDB.</Hint>
        </div>
      </Panel>

      <div class="lg:col-span-2">
        <Panel title="[ PROFILE_CONFIG ]" meta="portfolio/info">
          <Row>
            <Field label="Name" value={form().name} onInput={(v) => update("name", v)} />
            <Field label="Role" value={form().role} onInput={(v) => update("role", v)} />
            <Field
              label="Location"
              value={form().location}
              onInput={(v) => update("location", v)}
            />
            <Field
              label="Hobbies"
              value={form().hobbies}
              onInput={(v) => update("hobbies", v)}
            />
            <Field
              label="Uptime %"
              value={form().uptime}
              onInput={(v) => update("uptime", v)}
            />
            <Field
              label="Bio title"
              value={form().bio_title}
              onInput={(v) => update("bio_title", v)}
            />
          </Row>

          <label class="flex flex-col gap-1 font-label-mono">
            <span class="flex items-center justify-between text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              <span>Energy level</span>
              <span class="text-primary-fixed">{form().energy_level || 0}%</span>
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={form().energy_level || 0}
              onInput={(event) => update("energy_level", event.currentTarget.value)}
              class="h-2 w-full cursor-pointer appearance-none border border-outline-variant bg-surface accent-[#00fbfb]"
            />
          </label>

          <TextArea
            label="Bio part 1"
            rows={3}
            value={form().bio.part_1}
            onInput={(v) => updateBio("part_1", v)}
          />
          <TextArea
            label="Bio part 2"
            rows={3}
            value={form().bio.part_2}
            onInput={(v) => updateBio("part_2", v)}
          />

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <Hint>Changes go live on the public pages immediately.</Hint>
            <Button variant="primary" icon="save" disabled={saving() || !dirty()} onClick={save}>
              {saving() ? "Saving" : "Save profile"}
            </Button>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default ProfilePanel;


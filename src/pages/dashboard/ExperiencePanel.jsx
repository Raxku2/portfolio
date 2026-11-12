import { For, Show, createSignal } from "solid-js";
import { experience } from "../../stores";
import {
  createExperience,
  refreshExperience,
  removeExperience,
  updateExperience,
} from "../../hooks/dashboard";
import { Button, Field, Hint, Panel, Row, TextArea } from "./ui";

const emptyEntry = () => ({ title: "", desc: "", date: "", catagory: "", url: "" });

/*
  Timeline / sys_log editor. Each entry lives in the "exp" array of the
  experience document and renders on the About page.
*/
const ExperiencePanel = (props) => {
  const [form, setForm] = createSignal(emptyEntry());
  const [editing, setEditing] = createSignal(null);
  const [busy, setBusy] = createSignal(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const reset = () => {
    setEditing(null);
    setForm(emptyEntry());
  };

  const startEdit = (entry) => {
    setEditing(entry.id);
    setForm({
      title: entry.title || "",
      desc: entry.desc || "",
      date: entry.date || "",
      catagory: entry.catagory || "",
      url: entry.url || "",
    });
  };

  const submit = async () => {
    const title = form().title.trim();
    const date = form().date.trim();
    const catagory = form().catagory.trim();
    if (!title || !date || !catagory) {
      props.notify?.("Title, date and category are required", "error");
      return;
    }

    const wasEditing = Boolean(editing());
    setBusy(true);
    try {
      if (wasEditing) {
        await updateExperience({ id: editing(), ...form() });
      } else {
        await createExperience({ ...form() });
      }
      await refreshExperience();
      reset();
      props.notify?.(wasEditing ? "Experience updated" : "Experience added");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const drop = async (entry) => {
    if (!window.confirm(`Delete "${entry.title}"?`)) return;
    setBusy(true);
    try {
      await removeExperience(entry.id);
      await refreshExperience();
      if (editing() === entry.id) reset();
      props.notify?.("Experience removed");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <Panel title="[ EXPERIENCE_LOG ]" meta={`${experience().length} entries`}>
          <div class="flex flex-col gap-2">
            <For each={experience()}>
              {(entry) => (
                <div class="border-l-4 border-primary-fixed bg-surface p-2.5 font-label-mono">
                  <div class="flex flex-wrap items-start justify-between gap-2">
                    <div class="min-w-0">
                      <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span class="text-[11px] font-bold text-primary-fixed">
                          {entry.date}
                        </span>
                        <span class="text-[10px] uppercase text-tertiary-fixed">
                          [{String(entry.catagory || "").replace(/^\[|\]$/g, "")}]
                        </span>
                      </div>
                      <p class="mt-1 truncate text-sm font-bold text-primary">
                        {entry.title}
                      </p>
                      <p class="mt-1 text-[11px] leading-snug text-on-surface-variant">
                        {entry.desc || "No description"}
                      </p>
                      <Show when={entry.url}>
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="mt-1 inline-block truncate text-[10px] text-on-surface-variant underline decoration-outline hover:text-primary-fixed"
                        >
                          {entry.url}
                        </a>
                      </Show>
                    </div>
                    <div class="flex shrink-0 gap-1">
                      <Button variant="ghost" icon="edit" onClick={() => startEdit(entry)} />
                      <Button variant="danger" icon="delete" onClick={() => drop(entry)} />
                    </div>
                  </div>
                </div>
              )}
            </For>
            <Show when={!experience().length}>
              <Hint>No entries yet. Add the first one on the right.</Hint>
            </Show>
          </div>
        </Panel>
      </div>

      <Panel
        title={editing() ? "[ EDIT_ENTRY ]" : "[ ADD_ENTRY ]"}
        meta={editing() ? "update in place" : "append to log"}
      >
        <Field label="Title" value={form().title} onInput={(v) => update("title", v)} />
        <Row>
          <Field
            label="Date"
            type="date"
            value={form().date}
            onInput={(v) => update("date", v)}
          />
          <Field
            label="Category"
            value={form().catagory}
            placeholder="info / warn / error"
            onInput={(v) => update("catagory", v)}
          />
        </Row>
        <Field label="URL" value={form().url} onInput={(v) => update("url", v)} />
        <TextArea
          label="Description"
          rows={3}
          value={form().desc}
          onInput={(v) => update("desc", v)}
        />
        <div class="flex flex-wrap items-center justify-between gap-2">
          <Show when={editing()}>
            <Button variant="ghost" onClick={reset}>
              Cancel
            </Button>
          </Show>
          <Button
            variant="primary"
            icon={editing() ? "save" : "add"}
            disabled={busy()}
            onClick={submit}
          >
            {editing() ? "Update entry" : "Add entry"}
          </Button>
        </div>
      </Panel>
    </div>
  );
};

export default ExperiencePanel;

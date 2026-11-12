import { For, Show, createSignal } from "solid-js";
import { projects } from "../../stores";
import {
  createProject,
  refreshProjects,
  removeProject,
  updateProject,
  uploadImage,
} from "../../hooks/dashboard";
import { Button, Field, Hint, Panel, Row, Select, TextArea } from "./ui";

const STATUS_OPTIONS = ["[ONLINE]", "[MAINTENANCE]", "[OFFLINE]", "[BETA]"];

const emptyProject = () => ({
  title: "",
  desc: "",
  thumbnal: "",
  thumbnal_file_id: "",
  about_line_1: "",
  about_line_2: "",
  about_line_3: "",
  github: "",
  deployment: "",
  status: "[ONLINE]",
});

/*
  Project registry editor. Each document renders as a card on /projects.
  Thumbnails upload to ImageKit; the URL + fileId are stored in MongoDB.
*/
const ProjectsPanel = (props) => {
  const [form, setForm] = createSignal(emptyProject());
  const [editing, setEditing] = createSignal(null);
  const [busy, setBusy] = createSignal(false);
  const [uploading, setUploading] = createSignal(false);
  let fileInput;

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const reset = () => {
    setEditing(null);
    setForm(emptyProject());
    if (fileInput) fileInput.value = "";
  };

  const startEdit = (project) => {
    setEditing(project._id);
    setForm({
      title: project.title || "",
      desc: project.desc || "",
      thumbnal: project.thumbnal || "",
      thumbnal_file_id: project.thumbnal_file_id || "",
      about_line_1: project.about_line_1 || "",
      about_line_2: project.about_line_2 || "",
      about_line_3: project.about_line_3 || "",
      github: project.github || "",
      deployment: project.deployment || "",
      status: project.status || "[ONLINE]",
    });
  };

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const uploaded = await uploadImage(file, "/portfolio/projects");
      setForm((prev) => ({
        ...prev,
        thumbnal: uploaded.url,
        thumbnal_file_id: uploaded.fileId,
      }));
      props.notify?.("Thumbnail uploaded. Save the project to apply.");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setUploading(false);
      if (fileInput) fileInput.value = "";
    }
  };

  const submit = async () => {
    const title = form().title.trim();
    if (!title) {
      props.notify?.("Title is required", "error");
      return;
    }

    const wasEditing = Boolean(editing());
    setBusy(true);
    try {
      if (wasEditing) {
        await updateProject(editing(), form());
      } else {
        await createProject(form());
      }
      await refreshProjects();
      reset();
      props.notify?.(wasEditing ? "Project updated" : "Project added");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const drop = async (project) => {
    if (!window.confirm(`Delete project "${project.title}"? The thumbnail is removed from ImageKit too.`))
      return;
    setBusy(true);
    try {
      await removeProject(project._id);
      await refreshProjects();
      if (editing() === project._id) reset();
      props.notify?.("Project deleted");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <Panel title="[ PROJECT_REGISTRY ]" meta={`${projects().length} entries`}>
        <div class="flex flex-col gap-2">
          <For each={projects()}>
            {(project) => (
              <div class="flex gap-2 border-2 border-outline-variant bg-surface p-2">
                <div class="h-16 w-24 shrink-0 border border-outline-variant bg-surface-container-lowest">
                  <Show
                    when={project.thumbnal}
                    fallback={
                      <div class="flex h-full w-full items-center justify-center text-outline-variant">
                        <span class="material-symbols-outlined text-[18px]">image</span>
                      </div>
                    }
                  >
                    <img
                      src={project.thumbnal}
                      alt={project.title}
                      class="h-full w-full object-cover"
                    />
                  </Show>
                </div>
                <div class="min-w-0 flex-1 font-label-mono">
                  <div class="flex items-baseline justify-between gap-2">
                    <p class="truncate text-sm font-bold text-primary-fixed">
                      {project.title}
                    </p>
                    <span class="shrink-0 text-[10px] text-tertiary-fixed">
                      {project.status}
                    </span>
                  </div>
                  <p class="mt-1 line-clamp-2 text-[11px] leading-snug text-on-surface-variant">
                    {project.desc || "No description"}
                  </p>
                </div>
                <div class="flex shrink-0 flex-col justify-center gap-1">
                  <Button variant="ghost" icon="edit" onClick={() => startEdit(project)} />
                  <Button variant="danger" icon="delete" onClick={() => drop(project)} />
                </div>
              </div>
            )}
          </For>
          <Show when={!projects().length}>
            <Hint>No projects yet. Create the first one.</Hint>
          </Show>
        </div>
      </Panel>

      <Panel
        title={editing() ? "[ EDIT_PROJECT ]" : "[ NEW_PROJECT ]"}
        meta={editing() ? "update in place" : "insert document"}
      >
        <div class="flex gap-3 border border-dashed border-outline-variant bg-surface p-2">
          <div class="relative h-20 w-32 shrink-0 border border-primary-fixed bg-surface-container-lowest">
            <Show
              when={form().thumbnal}
              fallback={
                <div class="flex h-full w-full items-center justify-center text-outline-variant">
                  <span class="material-symbols-outlined text-2xl">image</span>
                </div>
              }
            >
              <img src={form().thumbnal} alt="Thumbnail" class="h-full w-full object-cover" />
            </Show>
            <Show when={uploading()}>
              <div class="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/80 font-label-mono text-[9px] text-primary-fixed">
                UPLOADING...
              </div>
            </Show>
          </div>
          <div class="flex min-w-0 flex-col justify-center gap-1.5">
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
              {form().thumbnal ? "Replace" : "Upload"}
            </Button>
            <Hint>Uploaded to ImageKit on save.</Hint>
          </div>
        </div>

        <Row>
          <Field label="Title" value={form().title} onInput={(v) => update("title", v)} />
          <Select
            label="Status"
            value={form().status}
            options={STATUS_OPTIONS}
            onChange={(v) => update("status", v)}
          />
        </Row>

        <TextArea
          label="Card description"
          rows={2}
          value={form().desc}
          onInput={(v) => update("desc", v)}
        />


        <TextArea
          label="About line 1"
          rows={1}
          value={form().about_line_1}
          onInput={(v) => update("about_line_1", v)}
        />
        <TextArea
          label="About line 2"
          rows={1}
          value={form().about_line_2}
          onInput={(v) => update("about_line_2", v)}
        />
        <TextArea
          label="About line 3"
          rows={1}
          value={form().about_line_3}
          onInput={(v) => update("about_line_3", v)}
        />

        <Row>
          <Field
            label="GitHub URL"
            value={form().github}
            placeholder="https://github.com/..."
            onInput={(v) => update("github", v)}
          />
          <Field
            label="Deployment URL"
            value={form().deployment}
            placeholder="https://..."
            onInput={(v) => update("deployment", v)}
          />
        </Row>

        <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
          <Show when={editing()}>
            <Button variant="ghost" onClick={reset}>
              Cancel
            </Button>
          </Show>
          <Button variant="primary" icon={editing() ? "save" : "add"} disabled={busy()} onClick={submit}>
            {editing() ? "Update project" : "Create project"}
          </Button>
        </div>
      </Panel>
    </div>
  );
};

export default ProjectsPanel;


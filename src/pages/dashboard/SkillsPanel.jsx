import { For, Show, createEffect, createSignal } from "solid-js";
import { skills } from "../../stores";
import {
  createCategory,
  createSkill,
  refreshSkills,
  removeCategory,
  removeSkill,
  renameCategory,
  updateSkill,
} from "../../hooks/dashboard";
import { Button, Field, Hint, Panel, Row, TextArea } from "./ui";

const emptySkill = () => ({ name: "", desc: "", url: "" });

/*
  Skill matrix editor. Categories are the top-level keys of the skills
  document; each category holds an array of { ID, name, desc, url }.
*/
const SkillsPanel = (props) => {
  const [category, setCategory] = createSignal("");
  const [newCategory, setNewCategory] = createSignal("");
  const [renaming, setRenaming] = createSignal(null);
  const [renameValue, setRenameValue] = createSignal("");
  const [form, setForm] = createSignal(emptySkill());
  const [editing, setEditing] = createSignal(null);
  const [busy, setBusy] = createSignal(false);

  const categories = () => Object.keys(skills() || {});
  const list = () => skills()?.[category()] || [];

  // Keep a valid category selected as the document changes.
  createEffect(() => {
    const keys = categories();
    if (keys.length && !keys.includes(category())) setCategory(keys[0]);
    if (!keys.length && category()) setCategory("");
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const addCategory = async () => {
    const value = newCategory().trim();
    if (!value) return;
    setBusy(true);
    try {
      await createCategory(value);
      await refreshSkills();
      setCategory(value.toUpperCase());
      setNewCategory("");
      props.notify?.("Category added");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const submitRename = async () => {
    const target = renaming();
    const next = renameValue().trim().toUpperCase();
    if (!target || !next || next === target) {
      setRenaming(null);
      return;
    }
    setBusy(true);
    try {
      await renameCategory(next, target);
      await refreshSkills();
      setCategory(next);
      setRenaming(null);
      props.notify?.("Category renamed");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const dropCategory = async (name) => {
    if (!window.confirm(`Delete category "${name}" and all of its skills?`)) return;
    setBusy(true);
    try {
      await removeCategory(name);
      await refreshSkills();
      props.notify?.("Category removed");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const submitSkill = async () => {
    const name = form().name.trim();
    if (!name || !category()) return;
    const wasEditing = Boolean(editing());
    setBusy(true);
    try {
      if (wasEditing) {
        await updateSkill({ catagory: category(), ID: editing().ID, ...form() });
      } else {
        await createSkill({ catagory: category(), ...form() });
      }
      await refreshSkills();
      setForm(emptySkill());
      setEditing(null);
      props.notify?.(wasEditing ? "Skill updated" : "Skill added");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  const startEdit = (skill) => {
    setEditing({ ID: skill.ID, catagory: category() });
    setForm({ name: skill.name || "", desc: skill.desc || "", url: skill.url || "" });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm(emptySkill());
  };

  const dropSkill = async (skill) => {
    if (!window.confirm(`Remove skill "${skill.name}"?`)) return;
    setBusy(true);
    try {
      await removeSkill({ catagory: category(), ID: skill.ID });
      await refreshSkills();
      if (editing()?.ID === skill.ID) cancelEdit();
      props.notify?.("Skill removed");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <Panel title="[ SKILL_CATEGORIES ]" meta={`${categories().length} total`}>
        <div class="flex flex-col gap-1.5">
          <For each={categories()}>
            {(name) => (
              <div
                class="flex items-stretch border-2"
                classList={{
                  "border-primary-fixed bg-primary-fixed/10": category() === name,
                  "border-outline-variant bg-surface": category() !== name,
                }}
              >
                <Show
                  when={renaming() === name}
                  fallback={
                    <button
                      type="button"
                      onClick={() => setCategory(name)}
                      class="flex min-w-0 flex-1 items-center justify-between gap-2 px-2.5 py-2 text-left font-label-mono text-[11px] uppercase tracking-wider transition-colors"
                      classList={{
                        "text-primary-fixed": category() === name,
                        "text-on-surface-variant hover:text-primary-fixed": category() !== name,
                      }}
                    >
                      <span class="truncate">{name}</span>
                      <span class="shrink-0 text-[10px] text-outline">
                        {skills()?.[name]?.length || 0}
                      </span>
                    </button>
                  }
                >
                  <input
                    value={renameValue()}
                    onInput={(event) => setRenameValue(event.currentTarget.value)}
                    onKeyDown={(event) => event.key === "Enter" && submitRename()}
                    class="min-w-0 flex-1 border-0 bg-surface px-2 py-2 font-label-mono text-[11px] text-primary focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={submitRename}
                    class="border-l-2 border-outline-variant px-2 text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed"
                    title="Save name"
                  >
                    <span class="material-symbols-outlined text-[15px]">check</span>
                  </button>
                </Show>

                <button
                  type="button"
                  onClick={() => {
                    setRenaming(name);
                    setRenameValue(name);
                  }}
                  class="border-l-2 border-outline-variant px-2 text-on-surface-variant hover:text-primary-fixed"
                  title="Rename category"
                >
                  <span class="material-symbols-outlined text-[15px]">edit</span>
                </button>
                <button
                  type="button"
                  onClick={() => dropCategory(name)}
                  class="border-l-2 border-outline-variant px-2 text-on-surface-variant hover:text-error"
                  title="Delete category"
                >
                  <span class="material-symbols-outlined text-[15px]">delete</span>
                </button>
              </div>
            )}
          </For>
          <Show when={!categories().length}>
            <Hint>No categories yet. Create one below.</Hint>
          </Show>
        </div>

        <Row cols="">
          <Field
            label="New category"
            value={newCategory()}
            placeholder="e.g. FRONTEND"
            onInput={setNewCategory}
          />
        </Row>
        <Button variant="ghost" icon="add" disabled={busy() || !newCategory().trim()} onClick={addCategory}>
          Add category
        </Button>
      </Panel>

      <div class="lg:col-span-2 flex flex-col gap-3">
        <Panel
          title={category() ? `[ ${category()} ]` : "[ NO_CATEGORY ]"}
          meta={`${list().length} skills`}
        >
          <Show
            when={category()}
            fallback={<Hint>Select or create a category to manage its skills.</Hint>}
          >
            <div class="flex flex-col gap-2">
              <For each={list()}>
                {(skill) => (
                  <div class="flex items-start justify-between gap-2 border-2 border-outline-variant bg-surface p-2.5">
                    <div class="min-w-0 font-label-mono">
                      <div class="flex flex-wrap items-baseline gap-x-2">
                        <span class="text-sm font-bold text-primary-fixed">{skill.name}</span>
                        <Show when={skill.url}>
                          <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="truncate text-[10px] text-on-surface-variant underline decoration-outline hover:text-primary-fixed"
                          >
                            {skill.url}
                          </a>
                        </Show>
                      </div>
                      <p class="mt-1 text-[11px] leading-snug text-on-surface-variant">
                        {skill.desc || "No description"}
                      </p>
                    </div>
                    <div class="flex shrink-0 gap-1">
                      <Button variant="ghost" icon="edit" onClick={() => startEdit(skill)} />
                      <Button variant="danger" icon="delete" onClick={() => dropSkill(skill)} />
                    </div>
                  </div>
                )}
              </For>
              <Show when={!list().length}>
                <Hint>This category has no skills yet.</Hint>
              </Show>
            </div>
          </Show>
        </Panel>


        <Show when={category()}>
          <Panel
            title={editing() ? "[ EDIT_SKILL ]" : "[ ADD_SKILL ]"}
            meta={editing() ? "update in place" : "append to category"}
          >
            <Row>
              <Field
                label="Skill title"
                value={form().name}
                placeholder="React"
                onInput={(v) => update("name", v)}
              />
              <Field
                label="URL"
                value={form().url}
                placeholder="https://..."
                onInput={(v) => update("url", v)}
              />
            </Row>
            <TextArea
              label="Description"
              rows={2}
              value={form().desc}
              placeholder="Short tooltip description"
              onInput={(v) => update("desc", v)}
            />
            <div class="flex flex-wrap items-center justify-between gap-2">
              <Hint>Category: {category()}</Hint>
              <div class="flex gap-2">
                <Show when={editing()}>
                  <Button variant="ghost" onClick={cancelEdit}>
                    Cancel
                  </Button>
                </Show>
                <Button
                  variant="primary"
                  icon={editing() ? "save" : "add"}
                  disabled={busy() || !form().name.trim()}
                  onClick={submitSkill}
                >
                  {editing() ? "Update skill" : "Add skill"}
                </Button>
              </div>
            </div>
          </Panel>
        </Show>
      </div>
    </div>
  );
};

export default SkillsPanel;


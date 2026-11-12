import { createEffect, createSignal } from "solid-js";
import { portfolioInfo } from "../../stores";
import { saveProfile } from "../../hooks/dashboard";
import { Button, Field, Hint, Panel, Row } from "./ui";

const TOTAL_MEMORY = 16;

/*
  Drives the telemetry strip in the site footer: online/offline badge, CPU load
  and used memory. Values live on the portfolio document, so the public footer
  reflects them on the next fetch.
*/
const StatusPanel = (props) => {
  const [form, setForm] = createSignal({ online: false, work_load: "0", memory: "0" });
  const [dirty, setDirty] = createSignal(false);
  const [saving, setSaving] = createSignal(false);

  createEffect(() => {
    const info = portfolioInfo() || {};
    if (dirty()) return;
    setForm({
      online: Boolean(info.online),
      work_load: String(info.work_load ?? "0"),
      memory: String(info.memory ?? "0"),
    });
  });

  const update = (key, value) => {
    setDirty(true);
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    try {
      await saveProfile({
        online: form().online,
        work_load: form().work_load,
        memory: form().memory,
      });
      setDirty(false);
      props.notify?.("Status updated");
    } catch (error) {
      props.notify?.(error.message, "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <Panel title="[ STATUS_CONTROL ]" meta="footer telemetry">
        <div class="flex flex-wrap items-center justify-between gap-3 border-2 border-outline-variant bg-surface p-3">
          <div class="flex items-center gap-2 font-label-mono text-xs uppercase">
            <span
              class="inline-block h-2.5 w-2.5"
              classList={{
                "bg-[#00ff00]": form().online,
                "bg-error": !form().online,
              }}
            />
            <span class={form().online ? "text-[#00ff00]" : "text-error"}>
              {form().online ? "ONLINE" : "OFFLINE"}
            </span>
          </div>
          <Button
            variant={form().online ? "danger" : "primary"}
            icon={form().online ? "power_settings_new" : "bolt"}
            onClick={() => update("online", !form().online)}
          >
            {form().online ? "Set offline" : "Set online"}
          </Button>
        </div>

        <label class="flex flex-col gap-1 font-label-mono">
          <span class="flex items-center justify-between text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
            <span>CPU load</span>
            <span class="text-primary-fixed">{form().work_load || 0}%</span>
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={form().work_load || 0}
            onInput={(event) => update("work_load", event.currentTarget.value)}
            class="h-2 w-full cursor-pointer appearance-none border border-outline-variant bg-surface accent-[#00fbfb]"
          />
        </label>

        <label class="flex flex-col gap-1 font-label-mono">
          <span class="flex items-center justify-between text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
            <span>Memory used</span>
            <span class="text-primary-fixed">
              {Number(form().memory || 0).toFixed(1)}GB / {TOTAL_MEMORY.toFixed(1)}GB
            </span>
          </span>
          <input
            type="range"
            min="0"
            max={TOTAL_MEMORY}
            step="0.1"
            value={form().memory || 0}
            onInput={(event) => update("memory", event.currentTarget.value)}
            class="h-2 w-full cursor-pointer appearance-none border border-outline-variant bg-surface accent-[#00fbfb]"
          />
        </label>

        <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
          <Hint>Mirrors the [ STATUS / CPU / MEM ] strip in the footer.</Hint>
          <Button variant="primary" icon="save" disabled={saving() || !dirty()} onClick={save}>
            {saving() ? "Saving" : "Save status"}
          </Button>
        </div>
      </Panel>

      <Panel title="[ TELEMETRY_PREVIEW ]" meta="live preview">
        <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span class={form().online ? "text-[#00ff00]" : "text-error"}>
              [ STATUS: {form().online ? "ONLINE" : "OFFLINE"} ]
            </span>
            <span class="text-primary-fixed-dim">
              CPU: {String(form().work_load || 0).padStart(2, "0")}%
            </span>
            <span class="text-on-tertiary-container">
              MEM: {Number(form().memory || 0).toFixed(1)}GB / {TOTAL_MEMORY.toFixed(1)}GB
            </span>
          </div>
        </div>

        <Row>
          <Field
            label="CPU %"
            type="number"
            value={form().work_load}
            onInput={(v) => update("work_load", v)}
          />
          <Field
            label="Memory (GB used)"
            type="number"
            value={form().memory}
            onInput={(v) => update("memory", v)}
          />
        </Row>
        <Hint>
          Fine-tune with the number inputs when the sliders are not precise enough.
        </Hint>
      </Panel>
    </div>
  );
};

export default StatusPanel;

import { For, Show, createSignal, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { Toast } from "../../components";
import { createToast } from "../../hooks/toast";
import { logout } from "../../hooks";
import { loadDashboard } from "../../hooks/dashboard";
import { userInfo } from "../../stores";
import ProfilePanel from "./ProfilePanel";
import SkillsPanel from "./SkillsPanel";
import ExperiencePanel from "./ExperiencePanel";
import ProjectsPanel from "./ProjectsPanel";
import StatusPanel from "./StatusPanel";
import { Button, Hint, Panel } from "./ui";

const TABS = [
  { key: "profile", label: "ACCOUNT", icon: "badge" },
  { key: "skills", label: "SKILLS", icon: "code" },
  { key: "experience", label: "EXPERIENCE", icon: "history" },
  { key: "projects", label: "PROJECTS", icon: "folder" },
  { key: "status", label: "STATUS", icon: "monitor_heart" },
];

/*
  Root console. Single page, five panels, no extra libraries.
  Everything writes through hooks/dashboard.js -> Express -> MongoDB.
*/
function MainDashboard() {
  const navigate = useNavigate();
  const { toast, notify } = createToast();
  const [tab, setTab] = createSignal("profile");
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      await loadDashboard();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  onMount(load);

  const handleExit = async () => {
    await logout();
    navigate("/home", { replace: true });
  };

  return (
    <div class="relative z-10 mx-auto flex w-full max-w-container-max flex-col gap-3 text-on-surface">
      {/* Console header */}
      <div class="flex flex-col border-2 border-outline-variant bg-surface-container-low">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b-2 border-outline-variant bg-surface-container px-3 py-2">
          <div class="flex items-center gap-2 font-label-mono text-[11px] font-bold uppercase tracking-wider text-primary-fixed sm:text-sm">
            <span class="material-symbols-outlined text-[18px]">terminal</span>
            ROOT_CONSOLE // OPS_CENTER
          </div>
          <div class="flex items-center gap-3 font-label-mono text-[10px] text-on-surface-variant">
            <span class="hidden max-w-[180px] truncate sm:inline" title={userInfo()?.email}>
              {userInfo()?.email || "UNKNOWN_OPERATOR"}
            </span>
            <span class="inline-block h-2 w-2 bg-[#00ff00]" />
            <Button variant="ghost" icon="logout" onClick={handleExit}>
              Exit
            </Button>
          </div>
        </div>

        {/* Tabs: horizontal scroll on narrow screens */}
        <div class="flex gap-1 overflow-x-auto p-2">
          <For each={TABS}>
            {(item) => (
              <button
                type="button"
                onClick={() => setTab(item.key)}
                class="flex shrink-0 items-center gap-1.5 border-2 px-2.5 py-2 font-label-mono text-[10px] font-bold uppercase tracking-wider transition-colors sm:text-[11px]"
                classList={{
                  "border-primary-fixed bg-primary-fixed text-on-primary-fixed":
                    tab() === item.key,
                  "border-outline-variant text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed":
                    tab() !== item.key,
                }}
              >
                <span class="material-symbols-outlined text-[15px]">{item.icon}</span>
                {item.label}
              </button>
            )}
          </For>
        </div>
      </div>

      <Show when={loading()}>
        <Panel title="[ SYNCING ]" meta="portfolioApp">
          <div class="flex items-center gap-3 py-6 font-label-mono text-xs text-primary-fixed">
            <span class="material-symbols-outlined animate-spin text-[18px]">
              progress_activity
            </span>
            FETCHING_CONFIG_FROM_MONGODB...
          </div>
        </Panel>
      </Show>

      <Show when={!loading() && error()}>
        <Panel title="[ CONNECTION_ERROR ]" meta="retry">
          <Hint>{error()}</Hint>
          <Button variant="primary" icon="refresh" onClick={load}>
            Retry sync
          </Button>
        </Panel>
      </Show>

      <Show when={!loading() && !error()}>
        <Show when={tab() === "profile"}>
          <ProfilePanel notify={notify} />
        </Show>
        <Show when={tab() === "skills"}>
          <SkillsPanel notify={notify} />
        </Show>
        <Show when={tab() === "experience"}>
          <ExperiencePanel notify={notify} />
        </Show>
        <Show when={tab() === "projects"}>
          <ProjectsPanel notify={notify} />
        </Show>
        <Show when={tab() === "status"}>
          <StatusPanel notify={notify} />
        </Show>
      </Show>

      <Toast toast={toast} />
    </div>
  );
}

export default MainDashboard;

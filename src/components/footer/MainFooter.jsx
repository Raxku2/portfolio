import { createSignal, onMount, onCleanup } from "solid-js";
import { portfolioInfo } from "../../stores";
import { useIndiaTime } from "../../hooks/indiaTime";

function MainFooter() {
  const time = useIndiaTime();

  const isOnline = () => portfolioInfo()?.online ?? false;
  const workLoad = () => Number(portfolioInfo()?.work_load) || 0;

  // Dashboard-controlled memory; falls back to the old CPU-derived estimate.
  const memUsed = () => {
    const stored = portfolioInfo()?.memory;
    if (stored !== undefined && stored !== null && String(stored).trim() !== "") {
      return Number(stored).toFixed(1);
    }
    return ((16 * workLoad()) / 100).toFixed(1);
  };

  return (
    <footer class="hidden fixed bottom-0 left-0 md:left-16 right-0 h-10 bg-surface-container-lowest border-t-2 border-outline-variant z-40 md:flex items-center justify-between px-margin font-label-mono text-sm tracking-widest">
      <div class="flex gap-6">
        <span class={isOnline() ? "text-[#00ff00]" : "text-[#ff0000]"}>
          [ STATUS: {isOnline() ? "ONLINE" : "OFFLINE"} ]
        </span>
        <span class="text-primary-fixed-dim">CPU: {workLoad().toString().padStart(2, "0")}%</span>
        <span class="text-on-tertiary-container">MEM: {memUsed()}GB / 16.0GB</span>
      </div>
      <div>
        <span class="text-on-surface-variant">IST_TIME: </span>
        <span class="text-on-surface" id="terminal-clock">
          {time()}
        </span>
      </div>
    </footer>
  );
}

export default MainFooter;

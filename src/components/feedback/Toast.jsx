import { Show } from "solid-js";

/*
  Terminal-styled toast. Pass the signal getter from createToast():
  <Toast toast={toast} />
*/
const Toast = (props) => (
  <Show when={props.toast?.()}>
    <div class="pointer-events-none fixed inset-x-0 bottom-14 z-[60] flex justify-center px-4">
      <div
        class="pointer-events-auto flex max-w-md items-start gap-2 border-2 bg-surface-container-lowest px-3 py-2 font-label-mono text-xs shadow-[4px_4px_0_0_#00fbfb]"
        classList={{
          "border-primary-fixed text-primary-fixed":
            props.toast().tone !== "error",
          "border-error text-error shadow-[4px_4px_0_0_#ffb4ab]":
            props.toast().tone === "error",
        }}
        role="status"
      >
        <span class="material-symbols-outlined text-[16px]">
          {props.toast().tone === "error" ? "error" : "check_circle"}
        </span>
        <span class="leading-snug">{props.toast().message}</span>
      </div>
    </div>
  </Show>
);

export default Toast;

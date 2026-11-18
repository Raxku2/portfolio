import { For, Show } from "solid-js";

/* Terminal window frame used by every dashboard panel. */
export const Panel = (props) => (
  <section class="flex flex-col border-2 border-outline-variant bg-surface-container-low">
    <div class="flex items-center justify-between gap-2 border-b-2 border-outline-variant bg-surface-container-high px-3 py-2">
      <h2 class="truncate font-label-mono text-[11px] font-bold uppercase tracking-wider text-primary-fixed sm:text-xs">
        {props.title}
      </h2>
      <Show when={props.meta}>
        <span class="hidden font-label-mono text-[10px] text-on-surface-variant sm:block">
          {props.meta}
        </span>
      </Show>
    </div>
    <div class="flex flex-col gap-3 p-3 sm:p-4">{props.children}</div>
  </section>
);


export const Field = (props) => (
  <label class="flex min-w-0 flex-col gap-1 font-label-mono">
    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
      {props.label}
    </span>
    <input
      type={props.type || "text"}
      value={props.value ?? ""}
      placeholder={props.placeholder}
      onInput={(event) => props.onInput?.(event.currentTarget.value)}
      class="w-full border-2 border-outline-variant bg-surface px-2.5 py-2 text-sm text-primary placeholder:text-outline-variant focus:border-primary-fixed focus:outline-none"
    />
  </label>
);

export const TextArea = (props) => (
  <label class="flex min-w-0 flex-col gap-1 font-label-mono">
    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
      {props.label}
    </span>
    <textarea
      rows={props.rows || 3}
      value={props.value ?? ""}
      placeholder={props.placeholder}
      onInput={(event) => props.onInput?.(event.currentTarget.value)}
      class="w-full resize-y border-2 border-outline-variant bg-surface px-2.5 py-2 text-sm leading-relaxed text-primary placeholder:text-outline-variant focus:border-primary-fixed focus:outline-none"
    />
  </label>
);

export const Select = (props) => (
  <label class="flex min-w-0 flex-col gap-1 font-label-mono">
    <span class="text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
      {props.label}
    </span>
    <select
      value={props.value ?? ""}
      onChange={(event) => props.onChange?.(event.currentTarget.value)}
      class="w-full cursor-pointer border-2 border-outline-variant bg-surface px-2.5 py-2 text-sm text-primary focus:border-primary-fixed focus:outline-none"
    >
      <For each={props.options}>
        {(option) => <option value={option.value ?? option}>{option.label ?? option}</option>}
      </For>
    </select>
  </label>
);

const VARIANTS = {
  primary:
    "border-primary-fixed bg-primary-fixed text-on-primary-fixed hover:bg-transparent hover:text-primary-fixed",
  ghost:
    "border-outline-variant text-on-surface-variant hover:border-primary-fixed hover:text-primary-fixed",
  danger:
    "border-error/60 text-error hover:bg-error hover:text-on-error",
};

export const Button = (props) => (
  <button
    type={props.type || "button"}
    disabled={props.disabled}
    onClick={() => props.onClick?.()}
    class={`inline-flex items-center justify-center gap-1.5 border-2 px-3 py-2 font-label-mono text-[11px] font-bold uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${VARIANTS[props.variant || "ghost"]}`}
  >
    <Show when={props.icon}>
      <span class="material-symbols-outlined text-[15px]">{props.icon}</span>
    </Show>
    {props.children}
  </button>
);

/* Row wrapper: stacks on phones, two columns from sm upwards. */
export const Row = (props) => (
  <div class={`grid grid-cols-1 gap-3 ${props.cols || "sm:grid-cols-2"}`}>
    {props.children}
  </div>
);

export const Hint = (props) => (
  <p class="font-label-mono text-[10px] leading-relaxed text-on-surface-variant sm:text-[11px]">
    {props.children}
  </p>
);

export const Divider = () => (
  <div class="h-0.5 w-full bg-outline-variant/60" />
);

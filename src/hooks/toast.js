import { createSignal, onCleanup } from "solid-js";

/*
  Tiny toast queue: one message at a time, auto dismissed.
  tone = "success" | "error"
*/
export const createToast = (duration = 2800) => {
  const [toast, setToast] = createSignal(null);
  let timer;

  const notify = (message, tone = "success") => {
    setToast({ message, tone });
    clearTimeout(timer);
    timer = setTimeout(() => setToast(null), duration);
  };

  onCleanup(() => clearTimeout(timer));

  return { toast, notify };
};

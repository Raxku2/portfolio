import { createSignal } from "solid-js";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const LoginButton1 = () => {
  const [buttonData, setButtonData] = createSignal({
    label: "Access Root",
  });
  return (
    <button
      type=""
      class="p-2 border-primary-fixed border-2 cursor-pointer hover:text-primary-fixed  "
      onClick={() => {
        window.location.href = BASE_URL + "auth/google";
      }}
    >
      {buttonData().label}
    </button>
  );
};

export default LoginButton1;

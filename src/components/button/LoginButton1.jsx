import { createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { isAuthenticated } from "../../stores";
import { logout } from "../../hooks";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const LoginButton1 = () => {
  const navigate = useNavigate();
  const [buttonData, setButtonData] = createSignal({
    label: "Access Root",
  });

  const handleLogout = async () => {
    await logout();
    navigate("/home", { replace: true });
  };

  return (
    // Logged out -> login. Logged in -> the same slot becomes an EXIT button.
    <Show
      when={!isAuthenticated()}
      fallback={
        <button
          type="button"
          class="p-2 border-error border-2 cursor-pointer hover:text-error"
          onClick={handleLogout}
        >
          EXIT
        </button>
      }
    >
      <button
        type=""
        class="p-2 border-primary-fixed border-2 cursor-pointer hover:text-primary-fixed  "
        onClick={() => {
          window.location.href = BASE_URL + "/auth/google";
        }}
      >
        {buttonData().label}
      </button>
    </Show>
  );
};

export default LoginButton1;

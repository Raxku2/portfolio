import { Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { isAuthenticated, userInfo } from "../../stores";
import { logout } from "../../hooks";

/*
  Reads the global auth store directly, so it stays in sync with the login page
  and the startup bootstrap without prop drilling or extra context.
*/
const UserSession = () => {
  const navigate = useNavigate();

  const displayName = () =>
    userInfo().name || userInfo().username || userInfo().email || "OPERATOR";
  const avatar = () => userInfo().picture || userInfo().dp || "";

  const handleLogout = async () => {
    await logout();
    navigate("/home", { replace: true });
  };

  return (
    <Show when={isAuthenticated()}>
      <div class="flex items-center gap-3 font-label-mono text-[11px] uppercase">
        <Show when={avatar()}>
          <img
            alt="Operator avatar"
            class="h-6 w-6 border border-primary-fixed object-cover"
            src={avatar()}
          />
        </Show>
        <span class="hidden text-[#00ff00] sm:inline">[ ON_LINE ]</span>
        <span
          class="max-w-[140px] truncate text-primary-fixed"
          title={displayName()}
        >
          {displayName()}
        </span>
        <button
          type="button"
          class="cursor-pointer border-2 border-outline-variant px-2 py-1 text-on-surface-variant transition-colors hover:border-error hover:text-error"
          onClick={handleLogout}
        >
          EXIT
        </button>
      </div>
    </Show>
  );
};

export default UserSession;

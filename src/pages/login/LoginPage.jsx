import { useNavigate, useSearchParams } from "@solidjs/router";
import { onMount } from "solid-js";
import { sessionValidator } from "../../hooks";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  onMount(async () => {
    const session = Array.isArray(searchParams.session)
      ? searchParams.session[0]
      : searchParams.session;

    // Landing here directly (no OAuth token) just returns the visitor home.
    if (!session) {
      navigate("/home", { replace: true });
      return;
    }

    // Validates the session, persists the user in localStorage + every global
    // store, then routes the operator into the app.
    const user = await sessionValidator(session);

    if (!user) console.warn("[AUTH] login rejected, nothing was stored");

    navigate("/home", { replace: true });
  });

  return (
    <div class="font-label-mono text-label-mono text-primary-fixed uppercase animate-pulse">
      &gt; VERIFYING_SESSION...
    </div>
  );
};

export default LoginPage;

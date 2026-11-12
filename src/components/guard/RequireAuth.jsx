import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";
import { hasRootAccess } from "../../stores";

/*
  Route guard. Allows the dashboard only for a logged-in session that the
  backend flagged as root/admin; everyone else is sent back home.
*/
const RequireAuth = (props) => (
  <Show when={hasRootAccess()} fallback={<Navigate href="/home" />}>
    {props.children}
  </Show>
);

export default RequireAuth;

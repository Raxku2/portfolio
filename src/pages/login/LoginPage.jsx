import { useNavigate, useSearchParams } from "@solidjs/router";
import { onMount } from "solid-js";
import { sessionValidator } from "../../hooks";

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // console.log(searchParams.session);
  onMount( async () => {
    if (!searchParams.session) {
      navigate("/home", { replace: true });
    } else {
      await sessionValidator(searchParams.session);
    }
  });

  return <div>logging in ...</div>;
};

export default LoginPage;

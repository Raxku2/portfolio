import { A } from "@solidjs/router";

function TopNavBar() {
  const baseClass = "transition-colors uppercase";
  const activeClass = "text-primary-fixed underline decoration-2 underline-offset-4 font-bold";
  const inactiveClass = "text-on-surface-variant hover:text-primary";

  return (
    <nav class="flex gap-8 ml-8 font-label-mono text-label-mono">
      <A
        href="/home"
        class={baseClass}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
      >
        HOME
      </A>
      <A
        href="/projects"
        class={baseClass}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
      >
        PROJECTS
      </A>
      <A
        href="/"
        end={true}
        class={baseClass}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
      >
        ABOUT
      </A>
      <A
        href="/contact"
        class={baseClass}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
      >
        CONTACT
      </A>
    </nav>
  );
}

export default TopNavBar;

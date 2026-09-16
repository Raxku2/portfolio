import { A } from "@solidjs/router";

const SideNavBar = () => {
  return (
    <aside class="fixed left-0 top-0 h-full w-16 bg-surface-container-low border-r-2 border-outline-variant z-50 flex flex-col items-center py-6">
      <nav class="flex flex-col gap-8">
        <A
          href="/home"
          class="group p-2 transition-all"
          activeClass="text-primary-fixed"
          inactiveClass="border-transparent hover:border-outline hover:text-primary border-2"
        >
          <span class="material-symbols-outlined text-[32px]">folder</span>
        </A>
        
        <A
          href="/projects"
          class="group p-2 transition-all"
          activeClass="text-primary-fixed"
          inactiveClass="border-transparent hover:border-outline hover:text-primary border-2"
        >
          <span class="material-symbols-outlined text-[32px]">code</span>
        </A>
        
        <A
          href="/"
          end={true}  
          class="group p-2 transition-all"
          activeClass="text-primary-fixed"
          inactiveClass="border-transparent hover:border-outline hover:text-primary border-2"
        >
          <span class="material-symbols-outlined text-[32px]">person</span>
        </A>
        
        <A
          href="/contact"
          class="group p-2 transition-all"
          activeClass="text-primary-fixed"
          inactiveClass="border-transparent hover:border-outline hover:text-primary border-2"
        >
          <span class="material-symbols-outlined text-[32px]">mail</span>
        </A>
      </nav>
    </aside>
  );
};

export default SideNavBar;

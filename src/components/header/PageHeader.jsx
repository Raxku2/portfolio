import TopNavBar from "../navBar/TopNavBar";

export const PageHeader = () => {
  return (
    <header class="fixed top-0 left-16 right-0 h-16 bg-surface-container border-b-2 border-outline-variant z-40 flex items-center justify-between px-margin">
      <div class="flex items-center gap-unit">
        <img
          alt="Terminal Logo"
          class="h-8 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7w-q0swwzKV_ZWdLr_u086-m4WQLl93lbgDbaohg7rhy9DU3zxO_BNqR-LqFy56PzjAm8ney640qsj-giXwH9CdrilpjQfuxNRkMX5Eb4neGTPzVNtbYm8m-klGbQUdxMVpAjiGEl3PoL1KC3c2vuTU4gTt5fzZd6gXf8gCyeZo8TaMpcRxyjiQjjXaSVfkkkD-_rzhB1Z3Zs-sm8rjlseZfwbDfvafcUQYoPfPjTOHJpYv712Eo"
        />
        <TopNavBar />
      </div>

      <div class="flex items-center gap-4">
        <span class="font-label-mono text-on-surface-variant uppercase">USR_Guest</span>
        <img
          alt="Profile"
          class="w-8 h-8 rounded-none border border-outline object-cover shadow-[2px_2px_0px_#00fbfb]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2UbLKuD27Cax_yJtLD0FZsMafR-aU3SHJKDoHVirS-G6ijqJoOqqX3K-30JS4aN3cnj-dNJl0M_nJP0TGlbJnoyFSQBVJZztsthCBDch_zmoxZdbtrJp-maHycytIdtXvQozlW7sojgSs2cA0waXyqYEwBPqgHmnbw7PCJa5BvItNpulaztpf20rnh4OMkt79-YqQW6VYAuNKSihR7FbOLqFFafr8r8TQ1E6XBgXfGwN7boiWsaY"
        />
      </div>
    </header>
  );
};

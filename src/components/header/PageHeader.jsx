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

    </header>
  );
};

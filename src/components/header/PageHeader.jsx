import TopNavBar from "../navBar/TopNavBar";

export const PageHeader = () => {
  return (
    <header class="fixed top-0 left-16 right-0 h-16 bg-surface-container border-b-2 border-outline-variant z-40 flex items-center justify-between px-margin">
      <div class="flex items-center gap-unit">
        <img
          alt="Terminal Logo"
          class="h-8 w-auto object-contain"
          src="./cyan_logo.png"
        />
        <TopNavBar />
      </div>
    </header>
  );
};

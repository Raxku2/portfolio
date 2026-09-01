import { MainFooter, PageHeader, SideNavBar } from "./components";

// Note: Add 'props' as an argument to your component
function App(props) {
  return (
    <>
      <SideNavBar />

      <div class="pl-16 flex flex-col h-screen">
        <PageHeader />

        <main class="grow pt-16 pb-12 bg-background relative z-10 px-margin">
          
          {/* The router will automatically inject AboutPage (or any matched route) right here */}
          {props.children}
          
        </main>
      </div>
      <MainFooter class="hidden" />
    </>
  );
}

export default App;

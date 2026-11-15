import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";
import { RequireAuth } from "./components";

// Import your pages
import { AboutPage, ContactPage, HomePage, LoginPage, MainDashboard, PrivacyPage, ProjectsPage } from "./pages";
import { Panel } from "./pages/dashboard/ui.jsx";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route component={App}>
        <Route path="/" component={AboutPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/supportme" component={() => <Panel title="[ Feature in Development ]" meta="build in progress" >
          <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
            <span class="material-symbols-outlined text-yellow-500 text-6xl!">
              warning
            </span>
            <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              We are putting the final touches on this page. Hang tight—this feature will be live before GTA 6
            </h1>
          </div>


        </Panel>} />
        <Route path="/courses" component={() => <Panel title="[ Feature in Development ]" meta="build in progress" >
          <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
            <span class="material-symbols-outlined text-yellow-500 text-6xl!">
              warning
            </span>
            <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              We are putting the final touches on this page. Hang tight—this feature will be live before GTA 6
            </h1>
          </div>
        </Panel>} />
        <Route path="/sale" component={() => <Panel title="[ Feature in Development ]" meta="build in progress" >
          <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
            <span class="material-symbols-outlined text-yellow-500 text-6xl!">
              warning
            </span>
            <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              We are putting the final touches on this page. Hang tight—this feature will be live before GTA 6
            </h1>
          </div>
        </Panel>} />

        <Route path="/apointment" component={() => <Panel title="[ Feature in Development ]" meta="build in progress" >
          <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
            <span class="material-symbols-outlined text-yellow-500 text-6xl!">
              warning
            </span>
            <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              We are putting the final touches on this page. Hang tight—this feature will be live before GTA 6
            </h1>
          </div>
        </Panel>} />

        {/* Logged-in admin area: the guard redirects to /home without a session */}
        <Route path="/dashboard" component={RequireAuth}>
          <Route path="/" component={MainDashboard} />
        </Route>
        <Route path="/blogs" component={() => <Panel title="[ Feature in Development ]" meta="build in progress" >
          <div class="border-2 border-outline-variant bg-surface-container-lowest p-3 font-label-mono text-xs flex items-center ">
            <span class="material-symbols-outlined text-yellow-500 text-6xl!">
              warning
            </span>
            <h1 class="pl-4 text-[10px] uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
              We are putting the final touches on this page. Hang tight—this feature will be live before GTA 6
            </h1>
          </div>
        </Panel>} />

        
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/login" component={LoginPage} />
        {/* Add more normal pages here later */}
      </Route>

      {/* 2. The catch-all 404 route sits OUTSIDE, so it renders entirely on its own */}
      {/* <Route path="*404" component={NotFoundPage} /> */}
    </Router>
  ),
  root,
);

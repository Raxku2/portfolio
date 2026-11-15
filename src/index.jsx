import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";
import { RequireAuth, UnderDev } from "./components";

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
        <Route path="/supportme" component={() => <UnderDev />} />
        <Route path="/courses" component={() => <UnderDev />} />
        <Route path="/sale" component={() => <UnderDev />} />

        <Route path="/apointment" component={() => <UnderDev />} />

        {/* Logged-in admin area: the guard redirects to /home without a session */}
        <Route path="/dashboard" component={RequireAuth}>
          <Route path="/" component={MainDashboard} />
        </Route>
        <Route path="/blogs" component={() => <UnderDev />} />


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

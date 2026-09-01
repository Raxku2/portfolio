import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";

// Import your pages
import { AboutPage, ContactPage, HomePage, MainDashboard, ProjectsPage } from "./pages";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route component={App}>
        <Route path="/" component={AboutPage} />
        <Route path="/home" component={<HomePage/>} />
        <Route path="/contact" component={<ContactPage/>} />
        <Route path="/projects" component={<ProjectsPage/>} />
        <Route path="/dashboard" component={<MainDashboard/>} />
        {/* Add more normal pages here later */}
      </Route>

      {/* 2. The catch-all 404 route sits OUTSIDE, so it renders entirely on its own */}
      {/* <Route path="*404" component={NotFoundPage} /> */}
    </Router>
  ),
  root,
);

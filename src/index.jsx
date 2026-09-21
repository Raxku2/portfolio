import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import App from "./App.jsx";

// Import your pages
import { AboutPage, ContactPage, HomePage, LoginPage, MainDashboard, PrivacyPage, ProjectsPage } from "./pages";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route component={App}>
        <Route path="/" component={AboutPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/supportme" component={() => <h1>support me</h1>} />
        <Route path="/courses" component={() => <h1>courses</h1>} />
        <Route path="/sale" component={() => <h1>sale</h1>} />
        <Route path="/apointment" component={() =>  <h1>apointment</h1>} />
        <Route path="/dashboard" component={MainDashboard} />
        <Route path="/blogs" component={() => <h1>blogs</h1>} />
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

import { Landing } from "./components/Landing";
import { AboutPage } from "./components/AboutPage";
import {AlumniPage} from "./components/AlumniPage"
import { SponsorsPage } from "./components/SponsorsPage";
import { ContactPage } from "./components/contactPage";
import {Team} from "./components/Team"
import { ProjectPage } from "./components/ProjectPage";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/projects">
          <ProjectPage/>
        </Route>
        <Route exact path="/leadership">
          <Team/>
        </Route>
        <Route exact path="/alumni">
          <AlumniPage/>
        </Route>
        <Route exact path = "/sponsors">
          <SponsorsPage/>
        </Route>
        <Route exact path ="/contact">
          <ContactPage/>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;

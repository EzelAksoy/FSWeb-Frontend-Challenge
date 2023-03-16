import "./reset.css";
import "./App.css";
import FirstInformation from "../src/Components/FirstInformation";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <FirstInformation />
      <Switch>
        <Route exact path="/">
          <Skills />
          <Profile />
          <Projects />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

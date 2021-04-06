import React, { ReactElement } from "react";
import Language from "./pages/language";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Menubar from "./components/menubar";
import Signup from "./components/singup";
import SignIn from "./components/signin";

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Signup />
          <SignIn />
          <Menubar />
          <Language />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/culture">
          <Navbar />
          <Signup />
          <SignIn />
          <Menubar />
          <Language />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/history">
          <Navbar />
          <Signup />
          <SignIn />
          <Menubar />
          <Language />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/travel">
          <Navbar />
          <Signup />
          <SignIn />
          <Menubar />
          <Language />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Language from "./pages/language";
import Mypage from "./pages/mypage";
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
      <Switch>
        <Route exact path="/mypage">
          <Navbar />
          <Signup />
          <SignIn />
          <Mypage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

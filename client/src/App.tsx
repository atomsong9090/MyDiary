import React, { ReactElement } from "react";
import Language from "./pages/language";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Language />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/creatediary">
          <Language />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/readdiary">
          <Language />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

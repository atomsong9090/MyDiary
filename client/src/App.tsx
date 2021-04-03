import React, { ReactElement } from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/creatediary">
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/readdiary">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamDetail from "./TeamDetail.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeamForm from "./TeamForm.js";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <TeamForm />
          </Route>
          <Route path="/TeamDetail" exact>
            <TeamDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="*" component={ NotFound } status={ 404 } />
      </Switch>
    );
};

export default Routes;
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import TestsContainer from "components/Tests/TestsContainer";
import TestContainer from "components/Test/TestContainer";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <TestsContainer />} />
      <Route
        path="/test/:id"
        exact
        render={({ match }) => {
          return <TestContainer testId={+match.params.id} />;
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;

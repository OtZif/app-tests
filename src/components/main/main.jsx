import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Tests from "../tests/tests";
import Test from "../test/test";

const Main = ({ admin, test, actions, filter, currentEdit }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => <Tests test={test} actions={actions} admin={admin} filter={filter} />}
      />
      <Route
        path="/test/:id"
        exact
        render={({ match }) => {
          return <Test test={test} testId={+match.params.id} admin={admin} actions={actions} currentEdit={currentEdit} />;
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;

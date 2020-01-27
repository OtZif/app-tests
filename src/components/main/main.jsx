import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Tests from "../tests/tests";
import Test from "../test/test";

const Main = ({ isAdmin, test, actions, isFiltered, currentEdit, questions }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Tests test={test} actions={actions} isAdmin={isAdmin} isFiltered={isFiltered} />
        )}
      />
      <Route
        path="/test/:id"
        exact
        render={({ match }) => {
          return (
            <Test
              test={test}
              testId={+match.params.id}
              isAdmin={isAdmin}
              actions={actions}
              currentEdit={currentEdit}
              questions={questions}
            />
          );
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;

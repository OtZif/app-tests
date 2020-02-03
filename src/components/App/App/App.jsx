import React from "react";
import style from "./App.module.scss";
import ModalContainer from "components/Modal/ModalContainer";

import HeaderContainer from "components/Header/HeaderContainer";
// import Main from "components/Main/Main";
import WelcomePage from "components/WelcomePage/WelcomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import TestsContainer from "components/Tests/TestsContainer";
import TestContainer from "components/Test/TestContainer";

const App = ({ isAuthorized, isModal, openModal }) => {
  return (
    <div className={`${style.app} ${isModal ? style.appOverflow : ""}`}>
      {isModal ? <ModalContainer /> : ""}
      <HeaderContainer />
      <Switch>
        {!isAuthorized && (
          <Route
            path="/welcome"
            exact
            render={() => <WelcomePage openModal={openModal} />}
          />
        )}
        {isAuthorized && (
          <Route path="/tests" exact render={() => <TestsContainer />} />
        )}
        {isAuthorized && (
          <Route
            path="/tests/:id"
            exact
            render={({ match }) => {
              return <TestContainer testId={+match.params.id} />;
            }}
          />
        )}
        <Redirect to={isAuthorized ? "/tests" : "/welcome"} />
      </Switch>
    </div>
  );
};

export default App;

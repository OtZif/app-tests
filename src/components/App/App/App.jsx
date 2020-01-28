import React from "react";

import "./app.scss";
import ModalContainer from "../../Modal/ModalContainer";

import Header from "../../Header/Header";
import Main from "../../Main/Main";
import WelcomePage from "../../WelcomePage/WelcomePage";

const App = ({ isAuthorized, userName, isModal, actions, filterTrack }) => {
  const { loginAction } = actions;
  return (
    <div className={`app ${isModal ? "app__overflow" : ""}`}>
      {isModal ? <ModalContainer /> : ""}
      <Header
        actions={actions}
        userName={userName}
        isAuthorized={isAuthorized}
        filterTrack={filterTrack}
      />
      {isAuthorized ? <Main /> : <WelcomePage login={loginAction} />}
    </div>
  );
};

export default App;

import React from "react";
import style from "./App.module.scss";
import ModalContainer from "components/Modal/ModalContainer";

import Header from "components/Header/Header";
import Main from "components/Main/Main";
import WelcomePage from "components/WelcomePage/WelcomePage";

const App = ({ isAuthorized, userName, isModal, actions, filterTrack }) => {
  const { loginAction } = actions;
  return (
    <div className={`${style.app} ${isModal ? style.appOverflow : ""}`}>
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

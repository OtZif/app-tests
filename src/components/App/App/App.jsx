import React from "react";
import style from "./App.module.scss";
import ModalContainer from "components/Modal/ModalContainer";

import Header from "components/Header/Header";
import Main from "components/Main/Main";
import WelcomePage from "components/WelcomePage/WelcomePage";

const App = ({ isAuthorized, userName, isModal, actions, searchLineText }) => {
  const { openModalAction } = actions;
  return (
    <div className={`${style.app} ${isModal ? style.appOverflow : ""}`}>
      {isModal ? <ModalContainer /> : ""}
      <Header
        actions={actions}
        userName={userName}
        isAuthorized={isAuthorized}
        searchLineText={searchLineText}
      />
      {isAuthorized ? <Main /> : <WelcomePage openModalAction={openModalAction} />}
    </div>
  );
};

export default App;

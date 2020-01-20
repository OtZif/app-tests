import React from "react";

import "./app.scss";
import Modal from "../modal/modal";

import Header from "../header/header";
import Main from "../main/main";
import WelcomePage from "../welcomePage/welcomePage";


const App = ({
  authorized,
  userName,
  admin,
  users,
  modal,
  test,
  actions,
  autorisation,
  addTitle,
  filter,
  filterTrack,
  modalAddQuestion,
  idTest,
  currentEdit,
  questionEdit,
}) => {
  const { loginAction } = actions;
  return (
    <div className={`app ${modal ? "app__overflow" : ""}`}>
      {modal ? (
        <Modal
          actions={actions}
          users={users}
          autorisation={autorisation}
          addTitle={addTitle}
          modalAddQuestion={modalAddQuestion}
          idTest={idTest}
          currentEdit={currentEdit}
          questionEdit={questionEdit}
        />
      ) : (
        ""
      )}
      <Header actions={actions} userName={userName} authorized={authorized} filterTrack={filterTrack} />
      {authorized ? (
        <Main admin={admin} test={test} actions={actions} filter={filter} currentEdit={currentEdit}/>
      ) : (
        <WelcomePage login={loginAction} />
      )}
    </div>
  );
};

export default App;

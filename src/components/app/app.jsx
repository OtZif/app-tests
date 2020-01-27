import React from "react";

import "./app.scss";
import Modal from "../modal/modal";

import Header from "../header/header";
import Main from "../main/main";
import WelcomePage from "../welcomePage/welcomePage";

const App = ({
  isAuthorized,
  userName,
  isAdmin,
  users,
  isModal,
  test,
  actions,
  autorisation,
  addTitle,
  isFiltered,
  filterTrack,
  modalAddQuestion,
  idTest,
  currentEdit,
  isQuestionEdit,
  questions
}) => {
  const { loginAction } = actions;
  return (
    <div className={`app ${isModal ? "app__overflow" : ""}`}>
      {isModal ? (
        <Modal
          actions={actions}
          users={users}
          autorisation={autorisation}
          addTitle={addTitle}
          modalAddQuestion={modalAddQuestion}
          idTest={idTest}
          currentEdit={currentEdit}
          isQuestionEdit={isQuestionEdit}
        />
      ) : (
        ""
      )}
      <Header
        actions={actions}
        userName={userName}
        isAuthorized={isAuthorized}
        filterTrack={filterTrack}
      />
      {isAuthorized ? (
        <Main
          isAdmin={isAdmin}
          test={test}
          actions={actions}
          isFiltered={isFiltered}
          currentEdit={currentEdit}
          questions={questions}
        />
      ) : (
        <WelcomePage login={loginAction} />
      )}
    </div>
  );
};

export default App;

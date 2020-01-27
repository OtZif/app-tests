import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as action from "../actions/index";
import {
  isAuthorizedSelector,
  userNameSelector,
  filterTrackSelector,
  filterSelector,
  isAdminSelector,
  isModalSelector,
  autorisationSelector,
  addTitleSelector,
  userSelector,
  isFilteredSelector,
  modalAddQuestionSelector,
  idTestSelector,
  currentEditSelector,
  isQuestionEditSelector,
  questionsSelector
} from "../selectors/index";

import App from "../components/app/app";
import { connect } from "react-redux";

const AppContainer = ({
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
  return (
    <Router>
      <App
        isAuthorized={isAuthorized}
        userName={userName}
        isAdmin={isAdmin}
        users={users}
        isModal={isModal}
        test={test}
        actions={actions}
        addTitle={addTitle}
        autorisation={autorisation}
        isFiltered={isFiltered}
        filterTrack={filterTrack}
        modalAddQuestion={modalAddQuestion}
        idTest={idTest}
        currentEdit={currentEdit}
        isQuestionEdit={isQuestionEdit}
        questions={questions}
      />
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
  userName: userNameSelector(state),
  isAdmin: isAdminSelector(state),
  isModal: isModalSelector(state),
  autorisation: autorisationSelector(state),
  addTitle: addTitleSelector(state),

  isFiltered: filterSelector(state),
  test: isFilteredSelector(state),
  users: userSelector(state),
  filterTrack: filterTrackSelector(state),
  modalAddQuestion: modalAddQuestionSelector(state),
  idTest: idTestSelector(state),
  currentEdit: currentEditSelector(state),
  isQuestionEdit: isQuestionEditSelector(state),
  questions: questionsSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

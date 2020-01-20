import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as action from "../actions/actions";
import {
  authorizedSelector,
  userNameSelector,
  filterTrackSelector,
  testsFilteredSelector,
  adminSelector,
  modalSelector,
  autorisationSelector,
  addTitleSelector,
  userSelector,
  filterSelector,
  modalAddQuestionSelector,
  idTestSelector,
  currentEditSelector,
  questionEditSelector
} from "../selectors/index";

import App from "../components/app/app";
import { connect } from "react-redux";

const AppContainer = ({
  authorized,
  userName,
  admin,
  users,
  modal,
  test1,
  actions,
  autorisation,
  addTitle,
  filter,
  filterTrack,
  modalAddQuestion,
  idTest,
  currentEdit,
  questionEdit
}) => {
  return (
    <Router>
      <App
        authorized={authorized}
        userName={userName}
        admin={admin}
        users={users}
        modal={modal}
        test={test1}
        actions={actions}
        addTitle={addTitle}
        autorisation={autorisation}
        filter={filter}
        filterTrack={filterTrack}
        modalAddQuestion={modalAddQuestion}
        idTest={idTest}
        currentEdit={currentEdit}
        questionEdit={questionEdit}
      />
    </Router>
  );
};

const mapStateToProps = state => ({
  authorized: authorizedSelector(state),
  userName: userNameSelector(state),
  admin: adminSelector(state),
  modal: modalSelector(state),
  autorisation: autorisationSelector(state),
  addTitle: addTitleSelector(state),
  test1: testsFilteredSelector(state),
  users: userSelector(state),
  filter: filterSelector(state),
  filterTrack: filterTrackSelector(state),
  modalAddQuestion: modalAddQuestionSelector(state),
  idTest: idTestSelector(state),
  currentEdit: currentEditSelector(state),
  questionEdit: questionEditSelector(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

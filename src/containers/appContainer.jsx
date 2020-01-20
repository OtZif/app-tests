import React from "react";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as action from "../actions/actions";
import { authorizedSelector, userNameSelector, filterTrackSelector, testsFilteredSelector } from "../selectors/index";

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
  questionEdit,
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
  admin: state.admin,
  modal: state.modal,
  autorisation: state.autorisation,
  addTitle: state.addTitle,
  test1: testsFilteredSelector(state),
  users: state.users,
  filter: state.filter,
  filterTrack: filterTrackSelector(state),
  modalAddQuestion: state.modalAddQuestion,
  idTest: state.idTest,
  currentEdit: state.currentEdit,
  questionEdit: state.questionEdit,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

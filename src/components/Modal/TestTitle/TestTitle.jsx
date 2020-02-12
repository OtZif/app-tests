import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY } from 'models/constants/index';
import FormButton from 'components/FormButton/FormButton';
import style from './TestTitle.module.scss';

class TestTitle extends PureComponent {
  state = {
    testTitle: '',
    isError: false,
  }

  handleClickSave = () => {
    const { actions } = this.props;
    const { testTitle } = this.state;

    if (testTitle.trim() !== '') {
      actions.addTestAction(testTitle);
    } else this.setState({ isError: true });
  };

  handleKeyUp = (e) => {
    const { actions } = this.props;
    const { testTitle } = this.state;

    if (e.keyCode === ENTER_KEY) {
      if (testTitle.trim() !== '') {
        actions.addTestAction(testTitle);
      } else this.setState({ isError: true });
    }
  };

  handleTitleChange = (e) => {
    const { value } = e.target;
    this.setState({ testTitle: value });
  };

  handleClickCancel = () => {
    const { actions } = this.props;
    actions.closeModalAction();
  };

  render() {
    const { isError } = this.state;
    return (
      <div className={style.testTitle}>
        <h2 className={style.title}>
          Add Test Title
        </h2>
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          onChange={this.handleTitleChange}
          autoFocus
        />
        <p className={`${style.error} ${isError && style.errorText}`}>
          Title field is empty or has invalid format
        </p>
        <FormButton text="Save" click={this.handleClickSave} />
        <FormButton text="Cancel" click={this.handleClickCancel} color="red" />
      </div>
    );
  }
};

TestTitle.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default TestTitle;

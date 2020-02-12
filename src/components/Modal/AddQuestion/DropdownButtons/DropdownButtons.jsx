import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DropdownButtons extends PureComponent {
  state = {
    buttonName: ['Single', 'Some', 'Numeric'],
  }

  render() {
    const { buttonName } = this.state;
    const { click } = this.props;
    return (
      buttonName.map((el) => (
        <button type="button" key={el} onClick={click(el)}>{el}</button>
      ))
    );
  }
}

DropdownButtons.propTypes = {
  click: PropTypes.func.isRequired,
};

export default DropdownButtons;

import React from 'react';
import PropTypes from 'prop-types';
import ModalContainer from 'components/Modal/ModalContainer';
import HeaderContainer from 'components/Header/HeaderContainer';
import { renderRoutes } from 'react-router-config';
import routes from 'routes';
import style from './App.module.scss';

const App = ({ isModal }) => (
  <div className={`${style.app} ${isModal ? style.appOverflow : ''}`}>
    {isModal && <ModalContainer />}
    <HeaderContainer />
    {renderRoutes(routes)}
  </div>
);

App.propTypes = {
  isModal: PropTypes.bool.isRequired,
};

export default App;

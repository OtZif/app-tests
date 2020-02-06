import React from 'react';
import { Switch } from 'react-router-dom';
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
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </div>
);

App.propTypes = {
  isModal: PropTypes.bool.isRequired,
};

export default App;

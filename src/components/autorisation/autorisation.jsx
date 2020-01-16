import React, { useState } from "react";

import "./autorisation.scss";


const Autorisation = ({ users, actions }) => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [value, setValue] = useState('');
  const checkLogin =() => {
    const newPerson = users.filter(user => user.login === login && user.pass === pass);
    console.log(newPerson);
    if (newPerson.length > 0 ) {
      actions.setUserNameAction(newPerson[0].name)
      if(login === 'admin') {
        actions.adminAction();
      }
      actions.authorizedAction()
      actions.closeModal();
    } else {
      console.log('');
      setValue(true)
    }
    
  }
  return (
    <form
      action=""
      className="autorisation--form"
      onSubmit={event => {
        //console.log("form submited", login, pass);
        event.preventDefault();
        checkLogin();
      }}
    >
      <h2 className='title' autoFocus>LOGIN</h2>
      <input
        type="text"
        placeholder="Username"
        autoFocus
        onChange={e => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPass(e.target.value)}
      />
      <p className={`error ${value? 'errorText' : ''}`}>User not found</p>
      <button type="submit" className='modal--button'>
        Login
      </button>
    </form>
  );
};

export default Autorisation;

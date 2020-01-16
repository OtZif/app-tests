import React from "react";
import "./welcomePage.scss";
import shark from "../../images/shark.png";

const WelcomePage = ({login}) => {
  const handleLogin = () => {
    login();
  }
  return (
    <div className="welcomePage">
      <img src={shark} alt="" />
      <div className='box'>
        <h1>Welcome to the Incredible Testing Platform</h1>
        <p>Please <span onClick={handleLogin}>log in</span> to begin</p>
      </div>
    </div>
  );
};

export default WelcomePage;

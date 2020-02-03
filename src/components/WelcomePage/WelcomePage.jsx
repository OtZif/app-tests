import React from "react";
import style from "./WelcomePage.module.scss";
import shark from "images/shark.png";

const WelcomePage = ({ openModal }) => {
  const handleLoginClick = () => {
    openModal("Autorisation");
  };
  return (
    <div className={style.welcomePage}>
      <img src={shark} alt="" />
      <div className={style.box}>
        <h1>Welcome to the Incredible Testing Platform</h1>
        <p>
          Please <span onClick={handleLoginClick}>log in</span> to begin
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;

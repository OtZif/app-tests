import React from "react";
import GreenButton from "components/GreenButton/GreenButton";
import RedButton from "components/RedButton/RedButton";
import style from "./Confirmation.module.scss";
const Confirmation = ({ actions, idTest, questionId, currentEdit }) => {
  const handlClickYes = () => {
    console.log(currentEdit);
    if (currentEdit === "test") {
      actions.removeTestAction(idTest);
    }
    if (currentEdit === "question") {
      actions.removeQuestionAction(idTest, questionId);
    }
  };

  const handlClickNo = () => {
    actions.closeModalAction();
  };

  return (
    <div className={style.confirmation}>
      <h2 className={style.title} autoFocus>
        Add You Sure?
      </h2>
      <GreenButton click={handlClickYes} text={"Yes"} />
      <RedButton click={handlClickNo} text={"No"} />
    </div>
  );
};

export default Confirmation;

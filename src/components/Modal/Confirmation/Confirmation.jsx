import React from "react";
import FormButton from "components/FormButton/FormButton";
import style from "./Confirmation.module.scss";
const Confirmation = ({ actions, idTest, questionId, currentEdit }) => {
  const handleClickYes = () => {
    if (currentEdit === "test") {
      actions.removeTestAction(idTest);
    }
    if (currentEdit === "question") {
      actions.removeQuestionAction(idTest, questionId);
    }
  };

  const handleClickNo = () => {
    actions.closeModalAction();
  };

  return (
    <div className={style.confirmation}>
      <h2 className={style.title} autoFocus>
        Add You Sure?
      </h2>
      <FormButton click={handleClickYes} text={"Yes"} />
      <FormButton click={handleClickNo} text={"No"} color={"red"} />
    </div>
  );
};

export default Confirmation;

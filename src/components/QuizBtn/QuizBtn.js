import React from "react";
import QuizBtnCss from "./QuizBtn.module.css";

const QuizBtn = ({ nextQuestion }) => {
  return (
    <div>
      <button className={QuizBtnCss.QuizBtn} onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default QuizBtn;

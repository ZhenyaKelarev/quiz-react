import React from "react";
import ActiveQuizCss from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({
  answers,
  question,
  onAnswerClick,
  activeQuestion,
  allQuestions,
  state,
}) => {
  return (
    <div className={ActiveQuizCss.ActiveQuiz}>
      <p className={ActiveQuizCss.Question}>
        <span>
          <strong>{activeQuestion}.</strong>&nbsp; {question}
        </span>
        <small>
          {activeQuestion} из {allQuestions}
        </small>
      </p>
      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        state={state}
      />
    </div>
  );
};

export default ActiveQuiz;

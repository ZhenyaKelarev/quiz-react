import React from "react";
import ResultQuizCss from "./ResultQuiz.module.css";

const ResultQuiz = ({ quiz, answer, id }) => {
  const quizId = quiz[id];
  return (
    <li key={id}>
      <i
        className={
          answer === "error"
            ? "fa fa-times " + ResultQuizCss.wrong
            : "fa fa-check " + ResultQuizCss.success
        }
      />
      <strong>{`${id + 1} ${quizId.question}`}</strong>
      <p>
        Правильный ответ - ({quizId.answers[quizId.rightAnswerId - 1].text})
      </p>
    </li>
  );
};

export default ResultQuiz;

import React from "react";
import FinishedQuizCss from "./FinishedQuiz.module.css";
import ResultQuiz from "./ResultQuiz/ResultQuiz";
import Button from "../UI/Button/Button";

const FinishedQuiz = ({ results, quiz, onRetry }) => {
  return (
    <div className={FinishedQuizCss.FinishedQuiz}>
      <ul>
        {results.resultAnswer.map((answer, id) => {
          return <ResultQuiz key={id} id={id} answer={answer} quiz={quiz} />;
        })}
      </ul>

      <p>
        Правильно {results.rightAnswer} из {quiz.length}
      </p>

      <div>
        <Button onClick={onRetry} type="primary" />
        <Button type="success" />
      </div>
    </div>
  );
};

export default FinishedQuiz;

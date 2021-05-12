import React from "react";
import FinishedQuizCss from "./FinishedQuiz.module.css";
import ResultQuiz from "./ResultQuiz/ResultQuiz";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

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
        <Button onClick={onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;

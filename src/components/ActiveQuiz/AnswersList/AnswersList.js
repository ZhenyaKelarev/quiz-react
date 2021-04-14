import React from "react";
import AnswersListCss from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({ answers, onAnswerClick, state }) => {
  return (
    <ul className={AnswersListCss.AnswersList}>
      {answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
            key={index}
            onAnswerClick={onAnswerClick}
            state={state ? state[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;

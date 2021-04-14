import React from "react";
import AnswerItemCss from "./AnswerItem.module.css";

const AnswerItem = ({ answer, onAnswerClick, state }) => {
  const cls = [AnswerItemCss.AnswerItem];
  if (state) {
    cls.push(AnswerItemCss[state]);
  }
  return (
    <li className={cls.join(" ")} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;

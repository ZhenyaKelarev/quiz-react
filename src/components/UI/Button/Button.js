import React from "react";
import ButtonCss from "./Button.module.css";

const Button = ({ type, onClick }) => {
  const cls = [ButtonCss.Button, ButtonCss[type]];
  return (
    <>
      <button onClick={onClick} className={cls.join(" ")}>
        Повторить
      </button>
    </>
  );
};

export default Button;

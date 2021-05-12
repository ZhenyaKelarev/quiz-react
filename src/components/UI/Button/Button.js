import React from "react";
import ButtonCss from "./Button.module.css";

const Button = ({ disabled, type, onClick, children }) => {
  const cls = [ButtonCss.Button, ButtonCss[type]];
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={cls.join(" ")}>
        {children}
      </button>
    </>
  );
};

export default Button;

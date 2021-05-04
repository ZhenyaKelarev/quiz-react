import React from "react";
import BackdropCss from "./Backdrop.module.css";

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className={BackdropCss.Backdrop}></div>;
};

export default Backdrop;

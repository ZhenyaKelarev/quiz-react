import React from "react";
import LoaderCss from "./Loader.module.css";

const Loader = ({}) => {
  return (
    <div className={LoaderCss.Loader}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

import React from "react";
import MenuToggleCss from "./MenuToggle.module.css";

const MenuToggle = ({ onToggle, isOpen }) => {
  const cls = [MenuToggleCss.MenuToggle, "fa"];

  if (isOpen) {
    cls.push("fa-times");
    cls.push(MenuToggleCss.open);
  } else {
    cls.push("fa-bars");
  }
  return <i className={cls.join(" ")} onClick={onToggle} />;
};

export default MenuToggle;

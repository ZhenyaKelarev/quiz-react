import React from "react";
import selectCss from "./Select.module.css";

const Select = ({ label, value, onChange, options }) => {
  const htmlFor = `${label} - ${Math.random()}`;
  return (
    <div className={selectCss.Select}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={value} onChange={onChange}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={option.value + index}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;

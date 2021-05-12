import React from "react";
import InputCss from "./Input.module.css";

function isInvalid(valid, touched, shouldValidate) {
  return !valid && shouldValidate && touched;
}

const Input = ({
  label,
  touched,
  shouldValidate,
  errorMessage,
  value,
  type,
  onChange,
  valid,
}) => {
  const inputType = type || "text";
  const cls = [InputCss.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(valid, touched, shouldValidate)) {
    cls.push(InputCss.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />

      {isInvalid(valid, touched, shouldValidate) ? (
        <span>{errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;

// function isInvalid({valid, touched, shouldValidate}) {
//   return !valid && shouldValidate && touched
// }

// const Input = props => {
//   const inputType = props.type || 'text'
//   const cls = [classes.Input]
//   const htmlFor = `${inputType}-${Math.random()}`

//   if (isInvalid(props)) {
//     cls.push(classes.invalid)
//   }

//   return (
//     <div className={cls.join(' ')}>
//       <label htmlFor={htmlFor}>{props.label}</label>
//       <input
//         type={inputType}
//         id={htmlFor}
//         value={props.value}
//         onChange={props.onChange}
//       />

//       {
//         isInvalid(props)
//           ? <span>{props.errorMessage || 'Введите верное значение'}</span>
//           : null
//       }
//     </div>
//   )
// }

// export default Input

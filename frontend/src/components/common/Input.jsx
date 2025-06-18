import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  const {
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    className = "",
  } = props;

  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default Input;


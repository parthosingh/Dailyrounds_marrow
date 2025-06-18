import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { children, onClick, type = "button", className = "" } = props;

  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;

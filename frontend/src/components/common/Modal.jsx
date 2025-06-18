import React from "react";
import styles from "./Modal.module.css";

function Modal(props) {
  const { isOpen, onClose, title, children } = props;

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button onClick={onClose} className={styles.closeBtn}>×</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;

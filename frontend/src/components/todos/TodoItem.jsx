import React from "react";
import styles from "./TodoItem.module.css";
import Button from "../common/Button";

function TodoItem({ todo, onDelete }) {
  return (
    <div className={styles.card}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <Button onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
}

export default TodoItem;

import React from "react";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <div className={styles.list}>
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default TodoList;

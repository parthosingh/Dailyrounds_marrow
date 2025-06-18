import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Input from "../common/Input";
import Button from "../common/Button";

function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <Input
        label="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
}

export default TodoForm;

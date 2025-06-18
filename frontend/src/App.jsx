
// import React, { useState } from "react";
// import TodoForm from "./components/todos/TodoForm";
// import TodoList from "./components/todos/TodoList";

// function App() {
//   const [todos, setTodos] = useState([]);

//   // Function to add a new todo
//   const handleAdd = (todo) => {
//     const newTodo = { ...todo, id: Date.now() };
//     setTodos((prev) => [...prev, newTodo]);
//   };

//   // Function to delete a todo
//   const handleDelete = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
//       <h1>My Todo List</h1>
//       <TodoForm onSubmit={handleAdd} />
//       <TodoList todos={todos} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import TodoForm from "./components/todos/TodoForm";
import TodoList from "./components/todos/TodoList";
import UserSwitcher from "./components/users/Userswitcher";

const dummyUsers = ["alice", "bob", "charlie", "dave", "eve"];

function App() {
  const [currentUser, setCurrentUser] = useState(dummyUsers[0]);
  const [todos, setTodos] = useState([]);

  // Add todo for the current user
  const handleAdd = (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(),
      user: currentUser, // associate with user
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Filter todos for current user only
  const userTodos = todos.filter((todo) => todo.user === currentUser);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo List for @{currentUser}</h1>

      <UserSwitcher
        users={dummyUsers}
        currentUser={currentUser}
        onSwitch={setCurrentUser}
      />

      <TodoForm onSubmit={handleAdd} />
      <TodoList todos={userTodos} onDelete={handleDelete} />
    </div>
  );
}

export default App;

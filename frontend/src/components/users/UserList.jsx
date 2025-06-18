import React from "react";
import styles from "./UserList.module.css";

function UserList({ users }) {
  return (
    <div className={styles.userList}>
      <h3>All Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user}>@{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

import React from "react";
import styles from "./UserSwitcher.module.css";

function UserSwitcher({ users, currentUser, onSwitch }) {
  return (
    <div className={styles.switcher}>
      <label>Select User:</label>
      <select value={currentUser} onChange={(e) => onSwitch(e.target.value)}>
        {users.map((user) => (
          <option key={user} value={user}>
            @{user}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSwitcher;

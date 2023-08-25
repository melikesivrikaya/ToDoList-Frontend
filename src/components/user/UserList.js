import React from "react";
import {useValues } from "../../context/Context";
export default function UserList() {
  const { usersValues} = useValues();
  return (
    <div>
      <h4>User List</h4>
    {usersValues.users.map((u) => (
          <a>{u.name} </a>
     ))}
    </div>
  );
}

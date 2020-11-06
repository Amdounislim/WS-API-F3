import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const Users = () => {
  const [listUsers, setListUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListUsers(res.data))
      .catch();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="row">
      {listUsers.map((el, i) => (
        <UserCard user={el} key={i} />
      ))}
    </div>
  );
};

export default Users;

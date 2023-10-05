import React, { useState, useEffect } from "react";
import { addUser, getUsers } from "../../services/user";
import "./index.scss";
import UserTable from "./table";

const User = () => {
  const [users, setUsers] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      gender: e.target.gender.value,
    };
    addUser(data).then((response) => {
      setUsers((prevState) => [...prevState, response]);
    });
  };
  useEffect(() => {
    getUsers().then((response) => setUsers(response));
  }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="firstname" />
        <input type="text" name="lastname" />
        <select name="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <UserTable data={users} />
    </>
  );
};

export default User;

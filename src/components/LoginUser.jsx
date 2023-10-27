import * as api from "../api";
import { useState, useEffect } from "react";

const LoginUser = ({ user, setUser }) => {
  // const [userList, setUserList] = useState("");
  // setUser("tickle122");
  // useEffect(() => {
  //   api.getUsers().then(({ users }) => {
  //     console.log(users);
  //     setUserList(users);
  //   });
  // }, []);
  // const handleSubmit = (event) => {
  //   preventDefault();

  //   console.log(event.target.value);
  //   const userExists = userList.find(
  //     (user) => user.username === event.target.value
  //   );
  //   console.log(userExists);
  //   if (userList.includes(event.target.value)) {
  //     setUser(event.target.value);
  //   }
  // };
  // if (user) {
  return (
    <>
      <h3>Welcome {user}!</h3>
    </>
  );
  // } else {
  //   return (
  //     <>
  //       <form onSubmit={handleSubmit}>
  //         <label>
  //           Username:
  //           <input
  //             name="username"
  //             type="text"
  //             maxLength="15"
  //             className="username-field"
  //           />
  //         </label>
  //         <button type="submit">Login</button>
  //       </form>
  //     </>
  //   );
  // }
};

export default LoginUser;

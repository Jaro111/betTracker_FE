import { useState } from "react";
import { login } from "../../../utils/fetch";
import "./LogIn.css";

export const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = props;

  //
  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(username, password);
    await setUser(data.user);
  };

  return (
    <div className="windowContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="userNameInput"
          placeholder="user name"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          className="passwordInput"
          placeholder="password"
          onChange={(e) => changeHandler(e, setPassword, password)}
          type="password"
        />
        <button type="submit" className="loginButton">
          Log In
        </button>
      </form>
    </div>
  );
};

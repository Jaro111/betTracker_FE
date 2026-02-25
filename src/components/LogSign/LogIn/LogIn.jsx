import { useState } from "react";
import { login } from "../../../utils/fetch";

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
    // if (!username || username === "undefined") {
    //   return;
    // } else if (!password || username === "undefined") {
    //   return;
    // }
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
        />
        <button type="submit" className="loginButton">
          Log In
        </button>
      </form>
    </div>
  );
};

import { useState, useEffect } from "react";
import { LogIn } from "./components/LogSign/LogIn/LogIn";
import { getTokenFromCookie } from "./common/index";
import { authCheck } from "./utils/fetch";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");
      if (token === false) {
        setUser({});
      } else {
        logInWithToken(token, setUser);
      }
    }
  }, []);

  const logInWithToken = async (token, setUser) => {
    const persistantUser = await authCheck(token);
    console.log("persistantUser: ", persistantUser);
    await setUser(persistantUser.user);
  };

  //
  // const logOut = () => {
  //   setUser({});
  //   document.cookie =
  //     "jwt_token=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // };

  return (
    <>
      {!user.username ? (
        <div>
          <LogIn setUser={setUser} />
        </div>
      ) : (
        <p>Dupa</p>
      )}
    </>
  );
}

export default App;

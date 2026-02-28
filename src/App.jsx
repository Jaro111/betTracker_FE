import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
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
    persistantUser.user["token"] = token;
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
        <BrowserRouter basename="">
          <Navbar setUser={setUser} user={user} />
          <Routes>
            <Route path="" element={<Home setUser={setUser} user={user} />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

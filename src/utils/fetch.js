import { writeCookie } from "../common/index";
// import { getTokenFromCookie } from "../common";

// SIGN UP
export const signupuUser = async (username, email, password) => {
  const response = await fetch("http://localhost:5000users/signUp", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  return data;
};

// LOG IN
export const login = async (username, password) => {
  console.log("click");
  const response = await fetch("http://localhost:5000/users/logIn", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const userData = await response.json();
  console.log("userData");
  console.log(userData);
  writeCookie("jwt_token", userData.user.token, 3);

  //   writeCookie("jwt_token", userData.user.token, 7);
  return userData;
};

// AUTH CHECK

export const authCheck = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5000/users/authCheck", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      //
    });
    const data = await response.json();
    return data;
    //
  } catch (error) {
    console.log(error);
  }
};

// Fetch sports
export const getSports = async (jwt) => {
  try {
    const response = await fetch("http://localhost:5000/sport/getSports", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      //
    });
    const data = await response.json();
    return data;
    //
  } catch (error) {
    console.log(error);
  }
};

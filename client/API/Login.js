import React from "react";
import sampleUser from "../sampleUser.js";
//check if username and password matches from the database
export async function Login(username, password) {
  if (username == "Tester" && password == "Tester") {
    return sampleUser;
  } else {
    return null;
  }
  // var url="localhost:3000"
  // var response = await fetch(url+"/signup", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     username: username,
  //     password: password,
  //   }),
  // });
}

//create an API call to login
// export const Login = (username, password) => {
//     return fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password,
//         }),
//     })
//         .then((response) => response.json())
//         .then((json) => {
//             return json;
//         })

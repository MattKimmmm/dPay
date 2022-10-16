import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login/Login.js";
import React, {useState, useEffect} from "react";
import Registration from "./Registration/Registration.js";
import Home from "./Home/Home.js";
import Settings from "./Settings/Settings.js";


export default function App() {
  //create a state to store user id
  const [user, setUser] = useState(null);
  const [transactions,setTransactions] = useState([]);
  const [pageID, setPageID] = useState("login");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  switch (pageID) {
    case "login":
      return <Login setUser={setUser} setPageID={setPageID} setUserNameGlobal={setUserName} setPasswordGlobal={setPassword} setTransactions={setTransactions}/>;
    case "registration":
      return (
        <Registration
          userNameGlobal={username}
          passwordGlobal={password}
          setUserNameGlobal={setUserName}
          setPasswordGlobal={setPassword}
          setPageID={setPageID}
        />
      );
    case "home":
      return <Home user={user} setUser={setUser} setPageID={setPageID} transactions={transactions} setTransactions={setTransactions}/>
    default:
      return <Login setUser={setUser} setPageID={setPageID} />;
  }
}

//export setPageID from function App
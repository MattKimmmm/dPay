import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import Login from "./Login/Login.js";
import React, { useState, useEffect } from "react";
import Registration from "./Registration/Registration.js";
import Home from "./Home/Home.js";
import Settings from "./Settings/Settings.js";
import { Transaction } from "./Transactions/Transactions.js";
import Pay from "./Pay/Pay.js";

export default function App() {
  //create a state to store user id
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState([]);
  const [pageID, setPageID] = useState("login");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [shop, setShop] = useState(null);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    console.log("hello", user);
  }, [user]);

  switch (pageID) {
    case "login":
      return (
        <Login
          setUser={setUser}
          setPageID={setPageID}
          setUserNameGlobal={setUserName}
          setPasswordGlobal={setPassword}
          setTransactions={setTransactions}
        />
      );
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
      return (
        <Home
          user={user}
          setUser={setUser}
          setPageID={setPageID}
          transactions={transactions}
          setTransactions={setTransactions}
          setCurrentTransaction={setCurrentTransaction}
          setShop={setShop}
          payment={payment}
          setPayment={setPayment}
        />
      );
    case "transaction":
      return (
        <Transaction
          transaction={currentTransaction}
          setPageID={setPageID}
          setTransactions={setTransactions}
          transactions={transactions}
        />
      );
      case "pay":
        return (
          <Pay
            shop={shop}
            user={user}
            setShop={setShop}
            setPageID={setPageID}
            setTransactions={setTransactions}
            transactions={transactions}
          />
        );
    case "settings":
      return (
        <Settings
          user={user}
          setPageID={setPageID}
          />
      )

    default:
      return <Login setUser={setUser} setPageID={setPageID} />;
  }
}

//export setPageID from function App

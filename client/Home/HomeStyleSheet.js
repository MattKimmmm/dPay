import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: 10,
  },
  notification_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  username_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    color: "black",
  },
  settings_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  balance_container: {
    display: "flex",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  balance: {
    fontSize: 50,
  },
  transaction_container1: {
    marginTop: 20,
    display: "flex",
    maxHeight: "30%",
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "column",
    width: "100%",
  },
  transaction_prompt: {
    marginLeft: 0,
    color: "#4a4a4a",
  },
  transaction_container2: {
    width: "100%",
    display: "flex",
    borderWidth: 1,
    borderTopColor: "lightgrey",
    borderBottomColor: "lightgrey",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    height: 200,
    backgroundColor:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 88%, rgba(255,255,255,1) 100%)",

    
  },
  empty: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
    color: "grey",
    text: {
      color: "grey",
    },
  },
  shops:{
    container:{
      display:"flex",
    }
  }
});

export default styles;

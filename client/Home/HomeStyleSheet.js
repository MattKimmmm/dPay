import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex:1,
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
    alignItems: "center",
    height:"100%",
    
  },
  notification_button: {
    color:"black",
    fontSize: 15,
  },
  notification_button_alarm: {
    color: "#eb4034",
    fontSize:15
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
    flexDirection: "row",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  balance: {
    fontSize: 50,
    width: "fit-content",
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
  shops_container: {
    display: "flex",
    flexDirection: "row",
    height: 300,
    width: "100%",
  },
});

export default styles;

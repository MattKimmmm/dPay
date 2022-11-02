import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width:"100%"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  input: {
    color: "black",
    backgroundColor: "white",
    //no border
    borderWidth: 0,
    //no shadow
    shadowColor: "transparent",
    //no outline
    height: 100,
    width: 200,
    textAlign: "center",
    fontSize: 40,
  },
  back: {
    width: 200,
  },
  dummy: {
    width: 200,
  },
  peoples_container: {
    display: "flex",
    flexDirection: "row",
    height: 200,
    width: "100%",
  },
});

export default styles;

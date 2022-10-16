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
  text: {
    backgroundColor: "grey",
    height: "80%",
    aspectRatio: 1,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
    marginLeft: 3,
    fontSize: "20px",
    color: "white",
  },
});

export default styles;

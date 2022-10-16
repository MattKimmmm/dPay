import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "grey",
    aspectRatio: 1,
    borderRadius: 50,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 3,
    marginLeft: 3,
    padding:10
  },
  text: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});

export default styles;

import React from "react";
import colors from "../ThemeColor.js";
import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //margin left and right
    margin: "10%",
    justifyContent: "center",
  },
  input_container: {
    width: "100%",
  },
  input: {
    //set width to 100%
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "#b3b3b3",
    color: "#000000",
    placeholderTextColor: "#000000",
    borderRadius: 10,
    padding: 10,
  },
  button_container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  registration_button_container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.primary,
    color: "white",
    width: 100,
    height: "100%",
    borderRadius: 10,
  },
});
export default styles;

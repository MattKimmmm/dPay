import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
  small: {
    Transaction: {
      backgroundColor: colors.primary,
      display: "flex",
      flexDirection: "row",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 3,
      marginBottom: 3,
      padding: 5,
      position: "relative",
      zIndex: 1,
      borderRadius: 10,
      alignItems: "center",
      height: 50,
    },
    Transaction_uncompleted: {
      backgroundColor: "#914950",
      display: "flex",
      flexDirection: "row",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 3,
      marginBottom: 3,
      padding: 5,
      position: "relative",
      zIndex: 1,
      borderRadius: 10,
      alignItems: "center",
      height: 50,
    },
    name: {
      width: 100,
      marginLeft: 10,
      marginRight: 10,
      color: "white",
    },
    TransactionText: {
      color: "white",
    },
    TransactionPeoples: {
      marginRight: 0,
      marginLeft: 40,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
});

export default styles
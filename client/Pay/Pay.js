import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
import { useState } from "react";
import styles from "./StyleSheet.js";

export default function Pay({
  shop,
  setShop,
  setPageID,
  setTransactions,
  transactions,
}) {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [people, setPeople] = useState([]);
  const goBack = () => {
    setShop(null);
    setPageID("home");
  };
  const pay = () => {
    //create transaction object with amount, isCompleted false, name, restaurantName, people

  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={goBack} style={styles.back}/>
        <Text style={styles.text}>Pay {shop.name}</Text>
        <View style={styles.dummy}></View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ""))}
          value={amount}
          placeholder="Amount"
        />
        <Button title="Pay" onPress={pay} />
      </View>
    </View>
  );
}

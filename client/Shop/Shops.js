import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";

export default function Shops({ shop, setPageID ,setShop}) {
    const goShop = () => {
        setShop(shop);
        setPageID("pay");
    }
  return (
    <View style={styles.container} onClick={goShop}>
      <Text style={styles.text}>{shop.name}</Text>
    </View>
  );
}

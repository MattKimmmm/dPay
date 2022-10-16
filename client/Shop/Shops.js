import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import styles from "./StyleSheet.js";

export default function Shops({ shop, setPageID ,setShop}) {
    const goShop = () => {
        setShop(shop);
        setPageID("pay");
    }
  return (
    <TouchableHighlight style={styles.container} onPress={goShop}>
      <Text style={styles.text}>{shop.name}</Text>
    </TouchableHighlight>
  );
}

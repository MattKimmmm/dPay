import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";

export default function Shops({ shop, setPageID }) {
    return (
        <View style={styles.container}>
            <View style={styles.text}>{shop.name}</View>
        </View>
    );
}
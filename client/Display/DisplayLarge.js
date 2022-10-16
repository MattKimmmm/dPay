import React, { useEffect } from "react";
import styles from "./StyleSheet.js";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export function DisplayLargeAdd({ user,set }) {
  useEffect(() => {
  });
  return (
    <View style={styles.round} onClick={set}>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
}
export function DisplayLargeRemove({ user, remove }) {
  useEffect(() => {
  });
  return (
    <View style={styles.round} onClick={remove}>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
}


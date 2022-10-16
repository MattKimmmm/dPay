import React, { useEffect } from "react";
import styles from "./StyleSheet.js";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export function DisplayLargeAdd({ user,set }) {
  useEffect(() => {
  });
  return (
    <View style={styles.round} onClick={() => set(user)}>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
}
export function DisplayLargeRemove({ user, remove }) {
  useEffect(() => {
  });
  return (
    <View style={styles.round} onClick={() => remove(user)}>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
}
export function DisplayLarge({ user }) {
  useEffect(() => {
  });
  return (
    <View style={styles.round}>
      <Text style={styles.text}>{user.username}</Text>
    </View>
  );
}

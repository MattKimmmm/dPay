import React, { useEffect } from "react";
import styles from "./StyleSheet.js";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export function DisplayLargeAdd({ user,set }) {
  useEffect(() => {
  });
  return (
    <TouchableHighlight style={styles.round} onPress={() => set(user)}>
      <Text style={styles.text}>{user.username}</Text>
    </TouchableHighlight>
  );
}
export function DisplayLargeRemove({ user, remove }) {
  useEffect(() => {
  });
  return (
    <TouchableHighlight style={styles.round} onPress={() => remove(user)}>
      <Text style={styles.text}>{user.username}</Text>
    </TouchableHighlight>
  );
}
export function DisplayLarge({ user }) {
  useEffect(() => {
  });
  return (
    <TouchableHighlight style={styles.round}>
      <Text style={styles.text}>{user.username}</Text>
    </TouchableHighlight>
  );
}

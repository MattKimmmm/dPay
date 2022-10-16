import React from "react";
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from  "./StyleSheet.js";
import CreateRestaurant from "../Restaurant/CreateRestaurant.js";
export default function Settings({user, setPageID}) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <Button
          title="Logout"
          onPress={() => {
            setPageID("login");
            setUserNameGlobal("");
            setPasswordGlobal("");
          }}
        />
        <CreateRestaurant user={user} setPageID={setPageID}/>
      </View>
    );
}
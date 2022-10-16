import React,{useEffect} from "react";
import styles from "./StyleSheet.js"
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


export default function Display({username, userID}){
    useEffect(()=>{
        console.log("hello", username)
    })
    return(
    <View style={styles.round}>
        <Text style={styles.text}>{username.charAt(0).toUpperCase()}</Text>
    </View>
    )
}
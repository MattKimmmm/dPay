import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import colors from "../ThemeColor.js";
import { useState, useEffect } from "react";
import styles from "./StyleSheet.js";

export default function Notification({ open, payment,myRef, setOpen}) {

    if(open){
        return(
            <ScrollView style={styles.container}>
                {payment == undefined ? null : payment.map((item, index) => {
                    return (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.restaurant.name}</Text>
                            <Text style={styles.text}>{item.amount}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        )
    }
}
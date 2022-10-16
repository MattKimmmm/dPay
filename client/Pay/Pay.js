import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
import { useState } from "react";

export default function Pay({ shop, setPageID, setShop }) {
    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState("");
    const goBack = () => {
        setShop(null);
        setPageID("home");
    };
    const pay = () => {
        //get user id
        //get shop id
        //get amount
        //get note
        //post to server
        //setPageID("home");
        navigation.navigate("Pay", {
        shop: shop,
        amount: amount,
        note: note,
        });
    };
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Pay {shop.name}</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => setAmount(text)}
            value={amount}
            placeholder="Amount"
        />
        <TextInput
            style={styles.input}
            onChangeText={(text) => setNote(text)}
            value={note}
            placeholder="Note"
        />
        <Button title="Pay" onPress={pay} />
        <Button title="Back" onPress={goBack} />
        </View>
    );
    }
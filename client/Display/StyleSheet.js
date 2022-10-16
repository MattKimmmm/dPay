import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
    round:{
        backgroundColor:"grey",
        height:"80%",
        aspectRatio:1,
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight:3,
        marginLeft:3,

    },
    text:{
        color:"white",
    }

});

export default styles;

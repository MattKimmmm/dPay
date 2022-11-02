import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
const styles = StyleSheet.create({
    container: {
        position:"absolute",
        zIndex:900,
        height:300,
        width: 300,
        top:40,
        left:10,
        backgroundColor:"white",
        borderRadius:10,

    },
    items:{
        borderTopColor:"grey",
        borderTopWidth:1,
        borderBottomColor:"grey",
        borderBottomWidth:1,
        height:50,
        width:"100%"    
    }
});
export default styles;
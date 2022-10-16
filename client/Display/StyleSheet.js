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

const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
}

export const theme = {
colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
},
spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
},
textVariants: {
    header: {
    fontFamily: 'Raleway',
    fontSize: 36,
    fontWeight: 'bold',
    },
    body: {
    fontFamily: 'Merriweather',
    fontSize: 16,
    },
}
};
  
export const darkTheme = {
...theme,
colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
}
}

export default styles;

import React from 'react';
import styles from '../Login/StyleSheet.js';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {RegistrationCheck} from './RegistrationCheck.js'

export default function Registration({
    userNameGlobal, passwordGlobal,setUserNameGlobal, setPasswordGlobal,setPageID}){
    
    const [username, setUsername] = React.useState(userNameGlobal);
    const [password, setPassword] = React.useState(passwordGlobal);
    const [email, setEmail] = React.useState("");
    
    return (
        <View style={styles.container}>
            <View style = {styles.back}>
                <Button
                    title = "Back"
                    style = {styles.button}
                    onPress = {() => setPageID("login")}
                ></Button>
            </View>
            <View style={styles.input_container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="username"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="password"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="email"
                ></TextInput>
            </View>
            <View style={styles.registration_button_container}>
                <Button
                    title="Register"
                    style={styles.button}
                    onPress={() => RegistrationCheck(username, password, email, {setPageID, setUserNameGlobal, setPasswordGlobal})}
                ></Button>
            </View>
        </View>
    );
}
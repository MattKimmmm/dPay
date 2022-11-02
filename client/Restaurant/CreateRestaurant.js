import React,{useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import styles from "./StyleSheet.js";
import postRestaurantAPI from "../API/postRestaurant.js";

//   id          String        @id @default(uuid())
//   name        String        @unique
//   location    String        @unique
//   ownerId     String
//   owner       User          @relation(fields: [ownerId], references: [id])
//   Transaction Transaction[]
//   Payment     Payment[]


export default function createRestaurant({user, setPageID}) {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    createRestaurant = () => {
        const restaurant = {
            name:name,
            address:address,
            ownerId:user.id
        }
        postRestaurantAPI(restaurant).then((response) => {
            alert(response)
            setPageID("home");
        })
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create Restaurant</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Create" onPress={() => postRestaurantAPI(user,user.id,name,address)}/>
            </View>
        </View>

    )
}
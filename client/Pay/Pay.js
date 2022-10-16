import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../ThemeColor.js";
import { useState, useEffect } from "react";
import styles from "./StyleSheet.js";
import Nearme from "../API/Nearme.js";
import sampleUsers from "../sampleUsers.js";
import {DisplayLargeAdd, DisplayLargeRemove} from "../Display/DisplayLarge.js";

export default function Pay({
  shop,
  user,
  setShop,
  setPageID,
  setTransactions,
  transactions,
}) {
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [peoples, setPeoples] = useState(sampleUsers);
  const [selectedPeople, setSelectedPeople] = useState([user]);
  const goBack = () => {
    setShop(null);
    setPageID("home");
  };
  const pay = () => {
    //create transaction object with amount, isCompleted false, name, restaurantName, people
  };
  const addToSelected = (user) =>{
    setSelectedPeople([...selectedPeople, user]);                               
  }
    const removeFromSelected = (user) =>{
    setSelectedPeople(selectedPeople.filter((selectedUser)=>selectedUser.id!=user.id));
    }
    //remove selectedPeople from people
    useEffect(()=>{
        console.log(peoples)
    },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={goBack} style={styles.back} />
        <Text style={styles.text}>Pay {shop.name}</Text>
        <View style={styles.dummy}></View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ""))}
          value={amount}
          placeholder="Amount"
        />
        <View style={styles.peoples_container}>
          {selectedPeople ==undefined ? null : selectedPeople.map((user, index) => {
            return <DisplayLargeRemove key={index} user={user} remove={removeFromSelected}/>;
          })}
        </View>
        <View style={styles.peoples_container}>
        {
            peoples.filter((person)=>!selectedPeople.includes(person)).map((user, index) => {
            return <DisplayLargeAdd key={index} user={user} set={addToSelected}/>;
        })}
        </View>
          <Button title="Pay" onPress={pay} />
        </View>
    </View>
  );
}

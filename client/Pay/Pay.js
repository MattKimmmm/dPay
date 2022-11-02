import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView,
  TouchableHighlight,
  TouchableOpacity, } from "react-native";
import colors from "../ThemeColor.js";
import { useState, useEffect } from "react";
import styles from "./StyleSheet.js";
import {Nearme} from "../API/Nearme.js";
import sampleUsers from "../sampleUsers.js";
import {DisplayLargeAdd, DisplayLargeRemove, DisplayLarge} from "../Display/DisplayLarge.js";
import { createTransactions } from "../API/Transaction.js";

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
  const [peoples, setPeoples] = useState([])
  const [selectedPeople, setSelectedPeople] = useState([user]);
  const goBack = () => {
    setPageID("home");
  };
  const pay = () => {
    //create transaction object with amount, isCompleted false, name, restaurant, people
    createTransactions(amount, false, shop, selectedPeople);
    setPageID("home");
  };
  useEffect(() => {
    Nearme().then((users) =>{
        setPeoples(users);
    })
    console.log(selectedPeople);
    },[]);
  const addToSelected = (user) =>{
    console.log(user);
    setSelectedPeople([...selectedPeople, user]);                               
  }
    const removeFromSelected = (user) =>{
    setSelectedPeople(selectedPeople.filter((selectedUser)=>selectedUser.id!=user.id));
    }
    //remove selectedPeople from people using id attribute
    

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
          value={"$"+amount}
          placeholder="Amount"
        />
        <ScrollView style={styles.peoples_container} horizontal={true}>
          {selectedPeople == undefined
            ? null
            : selectedPeople.map((thisUser, index) => {
                if(thisUser.id != user.id){
                    return (
                    <DisplayLargeRemove
                        key={index}
                        user={thisUser}
                        remove={removeFromSelected}
                    />
                    );
                }
                else{
                    return (
                    <DisplayLarge
                        key={index}
                        user={thisUser}
                    />
                    )
                }
            }
              )}
        </ScrollView>
        <ScrollView style={styles.peoples_container} horizontal={true}>
          {peoples
            .filter((person) => !selectedPeople.some( e=> e.id == person.id))
            .map((user, index) => {
              return (
                <DisplayLargeAdd key={index} user={user} set={addToSelected} />
              );
            })}
        </ScrollView>
        <Button title={selectedPeople.length<2 ? "Pay" : "Divide"} onPress={pay} />
      </View>
    </View>
  );
}

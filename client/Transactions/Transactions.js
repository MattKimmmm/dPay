import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "./StyleSheet.js";
import {getUsers} from "../API/User.js"
import Display from "../Display/Display.js"

export function SmallTransaction({transaction, setPageID}){
    // const[user,setUser] = React.useState(transactions.user);
  return (
    <View style={transaction.completed ?styles.small.Transaction : styles.small.Transaction_uncompleted}>
      <Text style={styles.small.name}>{transaction.name}</Text>
      <Text style={styles.small.TransactionText}>${transaction.amount}</Text>
      <View style={styles.small.TransactionPeoples}>
        {transaction.peoples.map((user, index) => {
          return (
            <Display key={index} username={user.username} userID={user.id} />
          );
        })}
      </View>
    </View>
  );
};
export function Transaction({transaction, setPageID}){
    // const[user,setUser] = React.useState(transactions.user);
  return (
    <View style={transaction.completed ?styles.small.Transaction : styles.small.Transaction_uncompleted}>
      <Text style={styles.small.name}>{transaction.name}</Text>
      <Text style={styles.small.TransactionText}>${transaction.amount}</Text>
      <View style={styles.small.TransactionPeoples}>
        {transaction.peoples.map((user, index) => {
          return (
            <Display key={index} username={user.username} userID={user.id} />
          );
        })}
      </View>
    </View>
  );
};

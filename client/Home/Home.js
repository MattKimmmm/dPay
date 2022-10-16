import React,{useEffect, useState} from "react";
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from "react-native";
import styles from "./HomeStyleSheet.js";
import Svg, { Path, Use, Image } from "react-native-svg";
import SmallTransactions from "../Transactions/Transactions.js";
import { getGeoLocation } from "../Location.js";
import { LinearGradient } from "expo-linear-gradient";
import {getNearbyShops } from "../API/Shops.js";

export default function Home({
  user,
  setUser,
  setPageID,
  transactions,
  setTransactions,
}) {
  const [shops, setShops] = useState([]);
  const [location,setLocation] = useState(null);
  if(location==null){
      const location_promise = getGeoLocation();
    location_promise.then((location) => {
      setLocation(location);
      getNearbyShops(location.coords.latitude,location.coords.longitude).then((shops) => 
      {
        console.log(shops)
        setShops(shops);
      });
    })
  }


 

  if (user != null) {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.notification_container}>
            <Button title="Notification" style={styles.notification_button}>
              Notification
            </Button>
          </View>
          <View style={styles.username_container}>
            <Text style={styles.username}>{user.username}</Text>
          </View>
          <View style={styles.settings_container}>
            <Button
              title="Settings"
              style={styles.settings}
              onPress={() => setPageID("settings")}
            ></Button>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.balance_container}>
            <Text style={styles.balance}>${user.balance.toFixed(2)}</Text>
          </View>
          <View style={styles.transaction_container1}>
            <Text style={styles.transaction_prompt}>Transactions</Text>

            <ScrollView style={styles.transaction_container2}>
              {transactions.length == 0 ? (
                <View style={styles.empty}>
                  <Text style={styles.empty.text}>empty</Text>
                </View>
              ) : (
                transactions.map((transaction) => (
                  <SmallTransactions
                    key={transaction.id}
                    transaction={transaction}
                    setPageID={setPageID}
                  ></SmallTransactions>
                ))
              )}
            </ScrollView>
          </View>
          <View style={styles.transaction_container1}>
            <Text style={styles.transaction_prompt}>Transactions</Text>

            <ScrollView style={styles.transaction_container2}>
              {transactions.length == 0 ? (
                <View style={styles.empty}>
                  <Text style={styles.empty.text}>empty</Text>
                </View>
              ) : (
                transactions.map((transaction) => (
                  <SmallTransactions
                    key={transaction.id}
                    transaction={transaction}
                    setPageID={setPageID}
                  ></SmallTransactions>
                ))
              )}
            </ScrollView>
          </View>
          <View style={styles.shops.container}>
          </View>
        </View>
      </View>
    );
  } else {
    setPageID("login");
  }
}

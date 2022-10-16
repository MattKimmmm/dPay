import React,{useEffect, useState, useRef} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import styles from "./HomeStyleSheet.js";
import Svg, { Path, Use, Image } from "react-native-svg";
import {SmallTransactions} from "../Transactions/Transactions.js";
import { getGeoLocation } from "../Location.js";
import { LinearGradient } from "expo-linear-gradient";
import {getNearbyShops } from "../API/Shops.js";
import Shops from "../Shop/Shops.js";
import {getPayment} from "../API/Payment.js";
import Notification from "../Notification/Notification.js";
import CreateRestaurant from "../Restaurant/CreateRestaurant.js";
export default function Home({
  user,
  setUser,
  setPageID,
  transactions,
  setTransactions,
  setCurrentTransaction,
  setShop,
  payment,
  setPayment,
}) {
  const [shops, setShops] = useState([]);
  const [location,setLocation] = useState(null);
  const [openNotification,setOpenNotification] = useState(false);
  const notification_ref= useRef("")
  if(location==null){
      const location_promise = getGeoLocation();
    location_promise.then((location) => {
      setLocation(location);
      getNearbyShops(location.coords.latitude,location.coords.longitude).then((shops) => 
      {
        setShops(shops);
      });
    })
  }
  useEffect(() => {
    const callPayment = getPayment(user.id)
    callPayment.then((payment) => {
      setPayment(payment);
    })
    console.log(notification_ref)
  }, []);
 

  if (user != null) {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.notification_container} ref={notification_ref}>
            <TouchableOpacity onPress={() =>setOpenNotification(!openNotification)}>
              <Text
                style={
                  payment == undefined || payment.length == 0
                    ? styles.notification_button
                    : styles.notification_button_alarm
                }
              >
                Notification
              </Text>
            </TouchableOpacity>
          </View>
          <Notification open={openNotification} payment={payment} myRef={notification_ref} setOpen={setOpenNotification}>

          </Notification>
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
              {transactions.length == 0 && transactions == undefined ? (
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

          <ScrollView style={styles.shops_container} horizontal={true}>
            {shops.map((shop) => (
              <Shops
                key={shop.id}
                shop={shop}
                setPageID={setPageID}
                setCurrentTransaction={setCurrentTransaction}
                setShop={setShop}
              ></Shops>
            ))}
          </ScrollView>

        </View>
      </View>
    );
  } else {
    setPageID("login");
  }
}

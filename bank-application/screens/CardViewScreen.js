import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { CARDS, USER } from "../data/dummy-data";

const CardViewScreen = (props) => {
  const cardID = props.navigation.getParam("cardID");  
  const selectedID = CARDS.find((card) => card.id === cardID);
  const userID = "u1";
  const currentUser = USER.find((user) => user.id === userID);
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Wallet");
            }}
          >
            <Ionicons name="ios-arrow-back" size={25} />
          </TouchableOpacity>
          <Text style={styles.headerFont}>{selectedID.title}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <Image
          style={styles.cards}
          resizeMode={"contain"}
          source={selectedID.card}
        />
        <Image
          style={styles.barcode}
          resizeMode={"contain"}
          source={selectedID.barcode}
        />
        <View style={styles.textView}>
          <Text style={styles.text_input}>{currentUser.name}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text_input}>{selectedID.cardNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 41,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    marginTop: 35,
    marginLeft: 41,
  },
  headerFont: {
    fontFamily: "josefsans-bold",
    marginLeft: 30,
    fontSize: 19,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  cards: {
    width: 325,
    height: 195,
    marginLeft: 26,
    marginRight: 26,
    marginTop: 55,
    marginBottom: 36,
  },
  barcode: {
    width: 284,
    height: 124,
    marginLeft: 46,
    marginRight: 46,
    marginBottom: 50,
  },
  textView: {
    width: 300,
    height: 65,
    borderRadius: 22,
    marginBottom: 29,
    shadowColor: Colors.shadow,
    backgroundColor: "white",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: 20,
  },
  text_input: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
  },
});

export default CardViewScreen;

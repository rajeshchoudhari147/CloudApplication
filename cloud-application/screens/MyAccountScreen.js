import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const MyAccountScreen = (props) => {

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Account");
            }}
          >
            <Ionicons name="ios-arrow-back" size={25} />
          </TouchableOpacity>
          <Text style={styles.headerFont}>My account</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View>
          <TextInput
            placeholder={"Name"}
            style={[styles.text_input, { marginTop: 37 }]}
          />
          <TextInput
            placeholder={"Email address"}
            editable={false}
            style={styles.text_input}
          />
          <TextInput
            placeholder={"Password"}
            style={styles.text_input}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.updateButton} onPress={() => {}}>
            <Text style={styles.updateButtonText}>Update Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Main");
            }}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
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
  headerFont: {
    fontFamily: "josefsans-regular",
    marginLeft: 30,
    fontSize: 19,
  },
  innerContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text_input: {
    width: 305,
    height: 58,
    borderRadius: 22,
    marginBottom: 36,
    shadowColor: Colors.shadow,
    backgroundColor: "white",
    shadowOpacity: 0.1,
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
  },
  updateButton: {
    width: 305,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 22,
    borderColor: Colors.primaryColor,
    borderWidth: 4,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  updateButtonText: {
    fontFamily: "josefsans-regular",
    color: Colors.primaryColor,
    fontSize: 20,
  },
  button: {
    width: 305,
    height: 58,
    backgroundColor: Colors.primaryColor,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 19,
    marginBottom: 58,
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontFamily: "josefsans-regular",
    color: "white",
    fontSize: 20,
  },
});

export default MyAccountScreen;

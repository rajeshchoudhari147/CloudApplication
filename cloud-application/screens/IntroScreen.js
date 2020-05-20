import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Images } from "../assets/Images";
import Colors from "../constants/Colors";

class IntroScreen extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.brandLogo} source={Images.logo} />
            <Text style={styles.text}>People's Bank</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
  },
  container: {
    backgroundColor: Colors.secondaryColor,
    marginTop: 41,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 25,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  buttonContainer: {
    marginBottom: 85,
  },
  brandLogo: {
    width: 300,
    height: 300,
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "josefsans-italic",
    fontSize: 35,
    marginTop: 29,
  },
  button: {
    width: 300,
    height: 58,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 29,
  },
  buttonText: {
    fontFamily: "josefsans-regular",
    color: Colors.secondaryColor,
    fontSize: 20,
  },
});

export default IntroScreen;

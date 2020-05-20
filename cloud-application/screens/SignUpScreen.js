import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { withAuthenticator } from 'aws-amplify-react-native';
import { Images } from "../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Main");
              }}
            >
              <Ionicons name="ios-arrow-back" size={25} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.brandLogo} source={Images.logo} />
          </View>

          <View style={styles.buttonContainer}>
            <TextInput placeholder={"Name"} style={styles.text_input} />
            <TextInput
              placeholder={"Email address"}
              style={styles.text_input}
            />
            <TextInput
              placeholder={"Password"}
              style={styles.text_input}
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ show: true });
              }}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fontButton}
              onPress={() => {
                this.props.navigation.navigate("SignIn");
              }}
            >
              <Text style={styles.font}>Do you have an account? Sign in</Text>
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backButton: {
    marginTop: 18,
    marginLeft: 30,
  },
  icon: {
    color: Colors.primaryColor
  },
  innerContainer: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandLogo: {
    width: 300,
    height: 300,
  },
  text_input: {
    width: 300,
    height: 65,
    borderRadius: 30,
    marginBottom: 29,
    backgroundColor: "white",
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
  },
  button: {
    width: 300,
    height: 58,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontFamily: "josefsans-regular",
    color: Colors.secondaryColor,
    fontSize: 20,
  },
  fontButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
    marginBottom: 80,
    color: 'white'
  },
});

export default withAuthenticator(SignUpScreen);

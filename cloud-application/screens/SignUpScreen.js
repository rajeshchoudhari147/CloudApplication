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
import Amplify, { Auth } from "aws-amplify";

import { Images } from "../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      name: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      confirmationCode: "",
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const signUp = async () => {
      try {
        await Auth.signUp({
          username: this.state.username,
          password: this.state.password,
          attributes: {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number,
          },
        });
        console.log("Successful Sign Up");
      } catch (err) {
        return console.log("error signing up!: ", err);
      }
    };

    const confirmSignUp = () => {
      Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
        .then(() => {
          console.log("Successful Confirm Sign Up");
          this.props.navigation.navigate({
            routeName: "SignIn",
          });
        })
        .catch((err) => console.log("error confirming signing up!: ", err));
    };

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
            <TextInput
              onChangeText={(value) => this.onChangeText("name", value)}
              placeholder={"Name"}
              style={styles.text_input}
            />
            <TextInput
              onChangeText={(value) => this.onChangeText("username", value)}
              placeholder={"Username"}
              style={styles.text_input}
            />
            <TextInput
              onChangeText={(value) => this.onChangeText("email", value)}
              placeholder={"Email address"}
              style={styles.text_input}
            />
            <TextInput
              onChangeText={(value) => this.onChangeText("phone_number", value)}
              placeholder={"Phone Number"}
              style={styles.text_input}
            />
            <TextInput
              onChangeText={(value) => this.onChangeText("password", value)}
              placeholder={"Password"}
              style={styles.text_input}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={signUp.bind(this)}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <TextInput
              onChangeText={(value) =>
                this.onChangeText("confirmationCode", value)
              }
              placeholder={"Confirmation Code"}
              style={styles.text_input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={confirmSignUp.bind(this)}
            >
              <Text style={styles.buttonText}>Confirm Sign Up</Text>
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
    color: Colors.primaryColor,
  },
  innerContainer: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandLogo: {
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  text_input: {
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
  },
  button: {
    width: 300,
    height: 55,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
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
    color: "white",
  },
});

export default SignUpScreen;

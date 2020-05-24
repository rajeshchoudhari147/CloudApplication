import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Auth } from "aws-amplify";
import { Images } from "../assets/Images";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmationCode: "",
      user: {},
    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value,
    });
  }

  // signIn() {
  //   const { username, password } = this.state;
  //   Auth.signIn(username, password)
  //     .then((user) => {
  //       this.setState({ user });
  //       console.log("Successful Sign in!");
  //     })
  //     .catch((err) => console.log("error signing in!: ", err));
  // }

  render() {
    // const signIn = async () => {
    //   try {
    //     await Auth.signIn(this.state.username, this.state.password);
    //     console.log("Successful Sign In");
    //   } catch (err) {
    //     return console.log("error signing in!: ", err);
    //   }
    // };

    const signIn = async () => {
      const { username, password } = this.state;
      Auth.signIn(username, password)
        .then((user) => {
          this.setState({ user });
          console.log("Successful Sign in!");
          this.props.navigation.navigate({
            routeName: "Dashboard",
            params: {
              name: this.state.name,
            },
          });
        })
        .catch((err) => console.log("error signing in!: ", err));
    };

    const confirmSignIn = async () => {
      try {
        await Auth.confirmSignIn(this.state.user, this.state.confirmationCode);
        console.log("Successful Confirm Sign In");
        this.props.navigation.navigate({
          routeName: "Dashboard",
          params: {
            name: this.state.name,
          },
        });
        return this.setState({ user });
      } catch (err) {
        return console.log("error confirming signing in!: ", err);
      }
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
          <View style={styles.logoContainer}>
            <Image style={styles.brandLogo} source={Images.logo} />
            <Text style={styles.text}>Just To-Do</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TextInput
              onChangeText={(value) => this.onChangeText("username", value)}
              placeholder={"Username"}
              style={styles.text_input}
            />
            <TextInput
              onChangeText={(value) => this.onChangeText("password", value)}
              placeholder={"Password"}
              style={styles.text_input}
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={signIn.bind(this)}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TextInput
              onChangeText={(value) => onChangeText("confirmationCode", value)}
              placeholder={"Confirmation Code"}
              style={styles.text_input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={confirmSignIn.bind(this)}
            >
              <Text style={styles.buttonText}>Confirm Sign In</Text>
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
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  brandLogo: {
    width: 100,
    height: 100,
  },
  text: {
    color: Colors.primaryColor,
    fontFamily: "josefsans-italic",
    fontSize: 35,
    marginTop: 29,
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
    marginTop: 93,
    marginBottom: 10,
    flexDirection: "row",
    marginBottom: 104,
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

    color: "white",
  },
});

export default SignInScreen;

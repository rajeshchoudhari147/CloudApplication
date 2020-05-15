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
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.show}
            onBackdropPress={() => this.setState({ show: false })}
            onSwipeComplete={() => this.setState({ show: false })}
            swipeDirection="down"
          >
            <View style={styles.detail}>
              <View style={styles.cancelButton}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignIn")}
                >
                  <MaterialIcons
                    name="cancel"
                    size={35}
                    style={styles.backButton}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.walletContent}>
                <Text style={styles.walletTitle}>Add To Wallet</Text>
                <Text style={styles.walletText}>
                  Add your 1card into your wallet
                </Text>
                <Image
                  style={styles.wallet}
                  resizeMode={"contain"}
                  source={
                    Platform.OS === "ios" ? Images.wallet : Images.GWallet
                  }
                />
                <TouchableOpacity
                  style={styles.walletButton}
                  onPress={() => {
                    this.setState({ show: false });
                  }}
                >
                  <Text style={styles.WalletButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View>
            <Image style={styles.brandLogo} source={Images.r_logo} />
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
    backgroundColor: "white",
    marginTop: 41,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backButton: {
    marginTop: 18,
    marginLeft: 30,
  },
  innerContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandLogo: {
    width: 139,
    height: 172,
    marginLeft: 80,
    marginRight: 80,
  },
  text_input: {
    width: 300,
    height: 65,
    borderRadius: 22,
    marginBottom: 29,
    shadowColor: Colors.shadow,
    backgroundColor: "white",
    shadowOpacity: 0.4,
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
  },
  button: {
    width: 300,
    height: 58,
    backgroundColor: Colors.primaryColor,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontFamily: "josefsans-regular",
    color: "white",
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
  },
  cancelButton: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "white",
    marginTop: 41,
    paddingRight: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  detail: {
    backgroundColor: "#00000066",
    flex: 1,
    justifyContent: "flex-end",
  },
  walletContent: {
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  walletTitle: {
    fontFamily: "josefsans-bold",
    fontSize: 24,
    color: Colors.primaryColor,
    marginBottom: 25,
  },
  walletText: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
  },
  wallet: {
    width: 96,
    height: 96,
    margin: 40,
  },
  walletButton: {
    width: 270,
    height: 58,
    backgroundColor: "#ECFCF4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    flexDirection: "row",
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  WalletButtonText: {
    fontFamily: "josefsans-regular",
    color: Colors.primaryColor,
    fontSize: 20,
  },
});

export default SignUpScreen;

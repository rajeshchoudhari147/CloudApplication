import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";

import { Linking } from "expo";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { Images } from "../assets/Images";
import Colors from "../constants/Colors";

class AccountScreen extends Component {
  openTermAndCondition = () => {
    let url = "http://1receipt.io/terms.html";
    Linking.openURL(url);
  };
  openPrivacy = () => {
    let url = "http://1receipt.io/privacy.html";
    Linking.openURL(url);
  };
  openContactUs = () => {
    let url = "mailto:help@1receipt.io?subject=1receipt support";
    Linking.openURL(url);
  };

  state = {
    switchValue: true,
  };

  handleSwitch = () =>
    this.setState((state) => ({
      switchValue: !state.switchValue,
    }));

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerFont}>Account</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.brandLogo} source={Images.r_logo} />
          </View>

          <View style={styles.screen}>
            <View style={styles.screenContent}>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => {
                  this.props.navigation.navigate("ManageAccount");
                }}
              >
                <MaterialIcons
                  name="person-outline"
                  size={25}
                  style={styles.icon}
                  color={Colors.grey}
                />
                <View style={styles.textAlign}>
                  <Text style={styles.font}>My Account</Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={25}
                  style={styles.rightIcon}
                  color={Colors.primaryColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => {
                  this.openTermAndCondition();
                }}
              >
                <MaterialIcons
                  name="note"
                  size={25}
                  style={styles.icon}
                  color={Colors.grey}
                />
                <View style={styles.textAlign}>
                  <Text style={styles.font}>Terms & Conditions</Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={25}
                  style={styles.rightIcon}
                  color={Colors.primaryColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => {
                  this.openPrivacy();
                }}
              >
                <MaterialCommunityIcons
                  name="security"
                  size={25}
                  style={styles.icon}
                  color={Colors.grey}
                />
                <View style={styles.textAlign}>
                  <Text style={styles.font}>Privacy</Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={25}
                  style={styles.rightIcon}
                  color={Colors.primaryColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => {
                  this.openContactUs();
                }}
              >
                <MaterialCommunityIcons
                  name="contact-mail"
                  size={25}
                  style={styles.icon}
                  color={Colors.grey}
                />
                <View style={styles.textAlign}>
                  <Text style={styles.font}>Contact Us</Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={25}
                  style={styles.rightIcon}
                  color={Colors.primaryColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => {
                  this.props.navigation.navigate("Notifications");
                }}
              >
                <Ionicons
                  name="ios-notifications"
                  size={25}
                  style={styles.icon}
                  color={Colors.grey}
                />
                <View style={styles.textAlign}>
                  <Text style={styles.font}>Notifications</Text>
                </View>
                <View style={styles.rightIcon}>
                  <Switch
                    trackColor={{
                      false: Colors.grey,
                      true: Colors.primaryColor,
                    }}
                    onValueChange={this.handleSwitch}
                    value={this.state.switchValue}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.version}>
                <Text style={styles.versionFont}>1receipt v2</Text>
              </View>
            </View>
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
  header: {
    marginTop: 35,
    marginLeft: 41,
  },
  headerFont: {
    fontFamily: "josefsans-bold",
    fontSize: 19,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  brandLogo: {
    width: 97,
    height: 120,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: Colors.primaryTint,
    marginTop: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  screenContent: {
    flex: 1,
    marginTop: 57,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  textAlign: {
    flex: 1,
    alignItems: "flex-start",
  },
  font: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
    color: Colors.primaryColor,
  },
  icon: {
    marginLeft: 33,
    marginRight: 12,
  },
  rightIcon: {
    marginRight: 33,
    justifyContent: "flex-end",
  },
  version: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  versionFont: {
    fontFamily: "josefsans-bold",
    fontSize: 15,
    color: Colors.primaryColor,
    marginBottom: 21,
  },
});

export default AccountScreen;

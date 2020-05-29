import React, { Component } from "react";
import { Auth, Analytics } from "aws-amplify";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

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
  constructor() {
    super();
    this.state = {
      selectedImage: null,
    };
  }
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ user });
    } catch (err) {
      console.log("Component Did Mount Error: ", err);
    }
  }

  openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ selectedImage: pickerResult.uri });
  };

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
            <TouchableOpacity
              onPress={() => {
                this.openImagePickerAsync();
                Analytics.record({
                  name: "Change profile picture",
                  attributes: { username: this.state.user.username },
                });
              }}
              style={styles.tabCircle}
            >
              <Image source={{ uri: selectedImage.localUri }} />
            </TouchableOpacity>
          </View>
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
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("Main");
              }}
            >
              <Text style={styles.buttonText}>Log Out</Text>
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
    fontFamily: "josefsans-regular",
    fontSize: 19,
    color: "white",
  },
  innerContainer: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabCircle: {
    width: 150,
    height: 150,
    borderRadius: 700,
    backgroundColor: Colors.secondaryColor,
    borderColor: "white",
    borderWidth: 2.5,
    justifyContent: "center",
    alignItems: "center",
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

export default AccountScreen;

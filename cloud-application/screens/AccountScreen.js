import { Auth, Analytics, Storage } from "aws-amplify";
import * as ImagePicker from "expo-image-picker";
import { Images } from "../assets/Images";
import Colors from "../constants/Colors";

import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

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

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    const imageName = pickerResult.uri.replace(/^.*[\\\/]/, "");
    const access = { level: "public", contentType: "image/jpeg" };
    const imageData = await fetch(pickerResult.uri);
    const blobData = await imageData.blob();

    try {
      await Storage.put(imageName, blobData, access);
      console.log("Sucessfully uploaded image...")
    } catch (err) {
      console.log("S3 upload error: ", err);
    }

    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ selectedImage: pickerResult.uri });
  };

  render() {
    if (this.state.selectedImage !== null) {
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
                <Image
                  style={styles.profile}
                  source={{
                    uri: this.state.selectedImage.uri,
                    crop: { left: 10, top: 50, width: 20, height: 40 },
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                placeholder={"Username"}
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

    // if (this.state.selectedImage !== null) {
    //   return (
    //     <View style={styles.container}>
    //       <Image
    //         source={{ uri: this.state.selectedImage.uri }}
    //         style={styles.thumbnail}
    //       />
    //     </View>
    //   );
    // }

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
              <Image style={styles.profile} source={Images.defaultProfile} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder={"Username"}
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
  profile: {
    width: 180,
    height: 180,
    resizeMode: "contain",
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

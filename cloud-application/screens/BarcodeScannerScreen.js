import React, { Component } from "react";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import Colors from "../constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";

class BarcodeScannerScreen extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    addCardManual: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Wallet");
              }}
            >
              <Ionicons name="ios-arrow-back" size={25} />
            </TouchableOpacity>
            <Text style={styles.headerFont}>Scan card</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.addCardManual}
          >
            <View style={styles.detail}>
              <View style={styles.cancelButton}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ addCardManual: false });
                  }}
                >
                  <MaterialIcons
                    name="cancel"
                    size={35}
                    style={styles.xButton}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.walletContent}>
                <Text style={styles.walletTitle}>Add membership card</Text>
                <TextInput
                  placeholder={"Card number"}
                  style={styles.text_input}
                />
                <TouchableOpacity
                  style={styles.walletButton}
                  onPress={() => {
                    this.setState({ addCardManual: false });
                  }}
                >
                  <Text style={styles.WalletButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={styles.barcodeScreen}
          />
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
          <TouchableOpacity
            style={styles.fontButton}
            onPress={() => {
              this.setState({ addCardManual: true });
            }}
          >
            <Text style={styles.buttonFont}>Enter the card number</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    this.setState({ scanned: true });
    alert(`Card number: ${data}`);
  };
}

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
    justifyContent: "flex-start",
    marginTop: 35,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerFont: {
    fontFamily: "josefsans-bold",
    marginLeft: 30,
    fontSize: 19,
  },
  innerContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
  },
  detail: {
    backgroundColor: "#00000066",
    flex: 1,
    justifyContent: "flex-end",
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
  xButton: {
    marginTop: 18,
    marginLeft: 30,
  },
  walletContent: {
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  walletTitle: {
    fontFamily: "josefsans-bold",
    fontSize: 24,
    color: Colors.primaryColor,
    marginBottom: 25,
  },
  text_input: {
    width: 305,
    height: 58,
    borderRadius: 22,
    marginTop: 31,
    marginBottom: 59,
    shadowColor: Colors.shadow,
    backgroundColor: "white",
    shadowOpacity: 0.4,
    fontFamily: "josefsans-regular",
    fontSize: 18,
    padding: 20,
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
  barcodeScreen: {
    flex: 1,
    margin: 20,
    marginBottom: 40,
  },
  fontButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFont: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
    marginBottom: 26,
  },
});

export default BarcodeScannerScreen;

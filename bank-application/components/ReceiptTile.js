import React, { Component } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RECEIPTS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { Images } from "../assets/Images";
import {
  FlatList,
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class ReceiptTile extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelect;
          this.setState({ show: true });
        }}
      >
        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
          >
            <View style={styles.detail}>
              <View style={styles.cancelButton}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show: false });
                  }}
                >
                  <MaterialIcons
                    name="cancel"
                    size={30}
                    style={styles.backButton}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.walletContent}>
                <Image
                  style={[
                    styles.storeLogo,
                    { backgroundColor: this.props.color },
                  ]}
                  resizeMode={"contain"}
                  source={this.props.storeLogo}
                />
                <Text style={styles.walletTitle}>{this.props.storeName}</Text>
                <Text style={styles.walletText}>{this.props.timeStamp}</Text>
                <Text style={styles.walletText}>{"$ " + this.props.amount}</Text>
                <Image
                  style={styles.barcodelogoR}
                  resizeMode={"contain"}
                  source={this.props.barcode}
                />
                <Text style={styles.barcodeText}>{this.props.barcodeNumber}</Text>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.leafContainer}>
          <Image
            style={styles.leaf}
            resizeMode={"contain"}
            source={Images.leafReceipt}
          />
          <Image
            style={styles.receiptIcon}
            resizeMode={"contain"}
            source={this.props.icon}
          />
          <Text style={styles.leafStore}>{this.props.storeName}</Text>
          <Text style={styles.leafDate}>{this.props.timeStamp}</Text>
          <Text style={styles.leafAmount}>{"$ " + this.props.amount}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  backButton: {
    marginTop: 18,
    marginLeft: 30,
  },
  storeLogo: {
    width: 100,
    height: 58,
    marginBottom: 17,
    padding: 5
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
    fontSize: 22,
    color: Colors.primaryColor,
    marginBottom: 17,
  },
  walletText: {
    fontFamily: "josefsans-regular",
    fontSize: 22,
    marginBottom: 17,
  },
  barcodelogoR: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 55,
    width: 130 * 2,
    marginBottom: 9,
  },
  barcodeText: {
    fontFamily: "josefsans-regular",
    fontSize: 16,
    marginBottom: 30,
  },
  walletIcon: {
    width: 96,
    height: 96,
    margin: 40,
  },
  leafContainer: {
    flex: 1,
    width: 131.32,
    height: 162.17,
    marginRight: 28,
    marginBottom: 18.92,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 120,
    borderTopLeftRadius: 700,
    borderTopRightRadius: 700,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    //backgroundColor: "white",
    //borderWidth: 1,
  },
  leaf: {
    flex: 1,
    width: 131.32,
    height: 162.17,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    //borderWidth: 1,
  },
  receiptIcon: {
    width: 19,
    height: 18,
    marginTop: 35,
  },
  leafStore: {
    marginTop: 17,
    fontFamily: "josefsans-bold",
    fontSize: 12,
    width: 87,
    height: 15,
    alignItems: "center",
  },
  leafDate: {
    marginTop: 9,
    fontFamily: "josefsans-regular",
    fontSize: 10,
  },
  leafAmount: {
    marginTop: 13,
    marginBottom: 42,
    fontFamily: "josefsans-regular",
    fontSize: 12,
    color: Colors.primaryColor,
  },
});

export default ReceiptTile;

import React, { Component } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RECEIPTS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { Images } from "../assets/Images";
import ReceiptTile from "../components/ReceiptTile";
import {
  FlatList,
  Image,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      walletPop: false,
      task: "",
      completed: false,
    };
  }

  render() {
    const renderGridItem = (itemData) => {
      return (
        <ReceiptTile
          icon={itemData.item.icon}
          storeLogo={itemData.item.storeLogo}
          storeName={itemData.item.storeName}
          timeStamp={itemData.item.timeStamp}
          amount={itemData.item.amount}
          color={itemData.item.color}
          barcode={itemData.item.barcode}
          barcodeNumber={itemData.item.barcodeNumber}
          onSelect={() => {
            this.props.navigation.navigate({
              routeName: "ReceiptTile",
              params: {
                receiptID: itemData.item.id,
              },
            });
          }}
        />
      );
    };

    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerFont}>Hi Andrew,</Text>
            <Text style={styles.font}>.</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.screen}>
            <View style={styles.screenContent}>
              <View style={styles.searchBar}>
                <View style={styles.search}>
                  <Ionicons
                    name="ios-search"
                    size={35}
                    style={styles.searchIcon}
                    color={Colors.grey}
                  />
                  <View style={styles.textInputAlign}>
                    <TextInput
                      placeholder={"Search"}
                      style={styles.text_input}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listView}>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={RECEIPTS}
              renderItem={renderGridItem}
              numColumns={1}
              initialNumToRender={4}
            />
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
  font: {
    marginTop: 10,
    fontFamily: "josefsans-regular",
    fontSize: 13.3,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  brandCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 161,
    marginLeft: 41,
    marginRight: 41,
    marginTop: 33,
    marginBottom: 37,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: Colors.primaryColor,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.5,
    ...Platform.select({ android: { elevation: 8 } }),
    backgroundColor: "white",
  },
  brandCardContent: {
    flex: 1,
    alignItems: "center",
  },
  brandCardAlign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  barcode: {
    width: 206,
    height: 108,
    marginLeft: 46,
    marginTop: 20,
    borderColor: Colors.grey,
    //borderWidth: 1,
  },
  wallet: {
    width: 27,
    height: 27,
    marginTop: 17,
    marginRight: 9,
    marginLeft: 6,
  },
  barcodeText: {
    fontFamily: "josefsans-regular",
    fontSize: 16,
    marginTop: 6.67,
    alignItems: "center",
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
  backButton: {
    marginTop: 18,
    marginLeft: 30,
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
  walletIcon: {
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
  buttonView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 41,
  },
  textAlign: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  fontbold: {
    fontFamily: "josefsans-bold",
    fontSize: 14,
    color: Colors.primaryColor,
  },
  rightIcon: {
    marginLeft: 31,
  },
  screen: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "white",
    height: 48,
    marginBottom: 82,
    marginLeft: 29,
    marginRight: 29,
  },
  screenContent: {
    flex: 1,
    height: 100,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 9,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    padding: 2,
  },
  textInputAlign: {
    flex: 1,
    alignItems: "flex-start",
  },
  listView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: 330,
    paddingLeft: 20,
    //borderWidth: 1,
  },
});

export default DashboardScreen;

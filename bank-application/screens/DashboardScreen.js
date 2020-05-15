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
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      walletPop: false,
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
            <Text style={styles.font}>
              Scan your card after purchases to save your receipt.
            </Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.walletPop}
          >
            <View style={styles.detail}>
              <View style={styles.cancelButton}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ walletPop: false });
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
                <Text style={styles.walletTitle}>Add To Wallet</Text>
                <Text style={styles.walletText}>
                  Add your 1card into your wallet
                </Text>
                <Image
                  style={styles.walletIcon}
                  resizeMode={"contain"}
                  source={
                    Platform.OS === "ios" ? Images.wallet : Images.GWallet
                  }
                />
                <TouchableOpacity
                  style={styles.walletButton}
                  onPress={() => {
                    this.setState({ walletPop: false });
                  }}
                >
                  <Text style={styles.WalletButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.brandCard}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ walletPop: true });
              }}
            >
              <View style={styles.brandCardContent}>
                <View style={styles.brandCardAlign}>
                  <Image
                    style={styles.barcode}
                    resizeMode={"cover"}
                    source={Images.barcode}
                  />
                  <Image
                    style={styles.wallet}
                    resizeMode={"contain"}
                    source={
                      Platform.OS === "ios" ? Images.wallet : Images.GWallet
                    }
                  />
                </View>
                <Text style={styles.barcodeText}>123456789</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {
              this.props.navigation.navigate("MyReceipts");
            }}
          >
            <View style={styles.textAlign}>
              <Text style={styles.fontbold}>My recent receipts</Text>
              <Feather
                name="chevron-right"
                size={20}
                style={styles.rightIcon}
                color={Colors.primaryColor}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.listView}>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={RECEIPTS}
              //data={RECEIPTS.sort((a, b) => a.storeName.localeCompare(b.storeName))}
              renderItem={renderGridItem}
              numColumns={2}
              scrollEnabled={false}
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

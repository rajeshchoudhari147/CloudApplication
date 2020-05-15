import React, { Component } from "react";
import {
  Feather,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { RECEIPTS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { Images } from "../assets/Images";
import ReceiptTile from "../components/ReceiptTile";
import StoreList from "../components/StoreList";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class MyReceiptScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      receipts: [],
      show: false,
      showDatePicker: false,
      sliderValue: 1000,
      fromDate: new Date(1598051730000),
      toDate: new Date(1598051730000),
    };
  }

  loadReceipts = async () => {
    const { data } = RECEIPTS;

    this.setState({ receipts: data, isLoading: false });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.loadReceipts();
  }

  searchReceipt = (value) => {
    const filteredReceipts = RECEIPTS.filter((receipt) => {
      let receiptLowercase = receipt.storeName.toLowerCase();
      let searchLowercase = value.toLowerCase();
      return receiptLowercase.indexOf(searchLowercase) > -1;
    });
  };

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

    const renderStoreList = (itemData) => {
      return (
        <StoreList
          storeName={itemData.item.storeName}
          onSelect={() => {
            this.props.navigation.navigate({
              routeName: "StoreList",
              params: {
                receiptID: itemData.item.id,
              },
            });
          }}
        />
      );
    };

    const renderCategoryList = (itemData) => {
      return (
        <StoreList
          storeName={itemData.item.category}
          onSelect={() => {
            this.props.navigation.navigate({
              routeName: "CategoryList",
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
            <Text style={styles.headerFont}>My receipts</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.show}
          >
            <View style={styles.detail}>
              <View style={styles.cancelButton}>
                <View style={styles.filterTitleAlign}>
                  <Text style={styles.filterTitle}>Filter by:</Text>
                </View>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => this.setState({ show: false })}
                >
                  <MaterialIcons name="cancel" size={22} color={Colors.grey} />
                </TouchableOpacity>
              </View>
              <View style={styles.filterContent}>
                <View style={styles.filterType}>
                  <View style={styles.buttonView}>
                    <Image
                      style={styles.icon}
                      resizeMode={"contain"}
                      source={Images.coin}
                    />
                    <View style={styles.textAlign}>
                      <Text style={styles.font}>Price</Text>
                    </View>
                    <View style={styles.rightIcon}>
                      <Text style={styles.font}>$0</Text>
                      <View style={styles.sliderView}>
                        <Slider
                          style={styles.slider}
                          minimumValue={0}
                          maximumValue={1000}
                          step={50}
                          value={this.state.sliderValue}
                          onValueChange={(sliderValue) =>
                            this.setState({ sliderValue })
                          }
                          minimumTrackTintColor={Colors.primaryColor}
                          maximumTrackTintColor={Colors.grey}
                        />
                      </View>
                      <View style={styles.fontUpdateView}>
                        <Text style={styles.fontUpdate}>
                          $ {this.state.sliderValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.filterType}>
                  <View style={styles.buttonView}>
                    <Image
                      style={styles.icon}
                      resizeMode={"contain"}
                      source={Images.date}
                    />
                    <View style={styles.textAlign}>
                      <Text style={styles.font}>Date</Text>
                    </View>
                    <View style={styles.rightIcon}>
                      <Text style={styles.font}>From:</Text>
                      <TouchableOpacity
                        onPress={() => {
                          DateTimePickerScreen;
                        }}
                      >
                        <Text style={styles.inputDate}>Select date</Text>
                      </TouchableOpacity>

                      <Text style={styles.font}>To:</Text>
                      <TextInput
                        placeholder={"Select date"}
                        style={styles.inputDate}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.filterType}>
                  <View style={styles.buttonView}>
                    <Image
                      style={styles.icon}
                      resizeMode={"contain"}
                      source={Images.category}
                    />
                    <View style={styles.textAlign}>
                      <Text style={styles.font}>Category</Text>
                    </View>
                    <View style={styles.rightIcon}>
                      <View style={styles.storeListView}>
                        <FlatList
                          keyExtractor={(item) => item.id}
                          data={RECEIPTS.sort((a, b) =>
                            a.category.localeCompare(b.category)
                          )}
                          renderItem={renderCategoryList}
                          numColumns={2}
                          scrollEnabled={false}
                          ListEmptyComponent={() => (
                            <Text style={styles.text}>
                              Categories not found
                            </Text>
                          )}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.filterType, { marginBottom: 50 }]}>
                  <View style={styles.buttonView}>
                    <Image
                      style={styles.icon}
                      resizeMode={"contain"}
                      source={Images.shoppingCart}
                    />
                    <View style={styles.textAlign}>
                      <Text style={styles.font}>Store</Text>
                    </View>
                    <View style={styles.rightIcon}>
                      <View style={styles.storeListView}>
                        <FlatList
                          keyExtractor={(item) => item.id}
                          data={RECEIPTS.sort((a, b) =>
                            a.storeName.localeCompare(b.storeName)
                          )}
                          renderItem={renderStoreList}
                          numColumns={2}
                          scrollEnabled={false}
                          ListEmptyComponent={() => (
                            <Text style={styles.text}>Stores not found</Text>
                          )}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>

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
                      onChangeText={(value) => this.searchReceipt(value)}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show: true });
                  }}
                >
                  <MaterialIcons
                    name="filter-list"
                    size={35}
                    style={styles.filterIcon}
                    color={Colors.grey}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.listView}>
            {this.state.isLoading ? (
              <View>
                <ActivityIndicator size="large" color={Colors.primaryColor} />
              </View>
            ) : null}
            <FlatList
              keyExtractor={(item) => item.id}
              data={RECEIPTS}
              //data={RECEIPTS.sort((a, b) => a.storeName.localeCompare(b.storeName))}
              renderItem={renderGridItem}
              numColumns={2}
              ListEmptyComponent={() => (
                <Text style={styles.text}>No recent receipts found</Text>
              )}
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
    marginBottom: 46,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
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
  text_input: {
    width: 230,
    height: 40,
    fontFamily: "josefsans-regular",
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 22,
    marginRight: 13,
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 5,
    paddingBottom: 5,
  },
  listView: {
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 562,
    //borderWidth: 1,
  },
  text: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
    color: Colors.primaryColor,
  },

  detail: {
    backgroundColor: "#00000066",
    flex: 1,
    justifyContent: "flex-end",
  },
  cancelButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey,
  },
  filterTitleAlign: {
    flex: 1,
  },
  filterTitle: {
    fontFamily: "josefsans-bold",
    fontSize: 19,
    marginTop: 23,
    marginBottom: 37,
    marginLeft: 23,
  },
  backButton: {
    marginTop: 23,
    marginRight: 23,
  },
  filterContent: {
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  filterType: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginTop: 12,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 36,
    //borderWidth: 1,
  },
  icon: {
    width: 14,
    height: 14,
    marginLeft: 8,
    marginRight: 6,
  },
  textAlign: {
    justifyContent: "center",
    alignItems: "center",
    width: 88,
    height: 38,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primaryTint,
  },
  rightIcon: {
    flex: 1,
    flexDirection: "row",
    marginRight: 25,
    justifyContent: "flex-end",
    //borderWidth: 1,
    alignItems: "center",
  },
  font: {
    fontFamily: "josefsans-regular",
    fontSize: 16,
  },
  fontUpdate: {
    fontFamily: "josefsans-regular",
    fontSize: 16,
  },
  fontUpdateView: {
    width: 52,
    alignItems: "flex-end",
  },
  slider: {
    width: 120,
    height: 40,
    alignItems: "center",
  },
  inputDate: {
    fontFamily: "josefsans-regular",
    fontSize: 16,
    width: 80,
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginHorizontal: 5,
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

export default MyReceiptScreen;

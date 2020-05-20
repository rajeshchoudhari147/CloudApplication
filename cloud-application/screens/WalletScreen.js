import React, { Component } from "react";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { CARDS, REWARDS_CARD } from "../data/dummy-data";
import Colors from "../constants/Colors";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

class WalletScreen extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    const renderCards = (itemData) => {
      return (
        <TouchableOpacity
          style={[styles.cardView, { backgroundColor: itemData.item.color }]}
          onPress={() => {
            this.props.navigation.navigate("CardView", {
              cardID: itemData.item.id,
            });
          }}
        >
          <Image
            style={styles.cardLogo}
            resizeMode={"contain"}
            source={itemData.item.logo}
          />
          <View style={styles.textAlign}>
            <Text style={styles.font}>{itemData.item.title}</Text>
            <Text style={styles.font}>{itemData.item.cardNumber}</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign
              name="delete"
              size={25}
              style={styles.rightIcon}
              color={Colors.grey}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };

    const renderRewardsOption = (itemData) => {
      return (
        <TouchableOpacity
          style={[
            styles.rewardscardView,
            { backgroundColor: itemData.item.rewardcolor },
          ]}
          onPress={() => {
            this.setState({ show: false });
            this.props.navigation.navigate("BarcodeScanner");
          }}
        >
          <Image
            style={styles.rewardscardLogo}
            resizeMode={"contain"}
            source={itemData.item.logo}
          />
          <View style={styles.rewardstextAlign}>
            <Text style={styles.font}>{itemData.item.title}</Text>
          </View>
          <Feather
            name="chevron-right"
            size={25}
            style={styles.rightIcon}
            color={Colors.grey}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerFont}>My wallet</Text>
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
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show: false });
                  }}
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
                <Text style={styles.walletTitle}>Choose a card</Text>
                <View style={styles.rewardscard}>
                  <View style={styles.rewardscardContent}>
                    <FlatList
                      keyExtractor={(item) => item.id}
                      data={REWARDS_CARD}
                      renderItem={renderRewardsOption}
                      numColumns={1}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ show: true });
              }}
            >
              <Text style={styles.buttonText}>Add card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={CARDS}
                renderItem={renderCards}
                numColumns={1}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    height: 78,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 30,
  },
  cardLogo: {
    marginLeft: 14,
    width: 61,
    height: 55,
    marginRight: 28,
  },
  textAlign: {
    flex: 1,
    alignItems: "flex-start",
  },
  font: {
    fontFamily: "josefsans-regular",
    fontSize: 18,
    color: "white",
  },
  rightIcon: {
    marginRight: 22,
    justifyContent: "flex-end",
  },
  rewardscardView: {
    flexDirection: "row",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 11.5,
  },
  rewardscardLogo: {
    marginLeft: 14,
    width: 61,
    height: 55,
    marginRight: 28,
  },
  rewardstextAlign: {
    flex: 1,
    alignItems: "flex-start",
  },
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
  },
  walletTitle: {
    fontFamily: "josefsans-bold",
    fontSize: 24,
    color: Colors.primaryColor,
    marginBottom: 25,
  },
  rewardscard: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rewardscardContent: {
    flex: 1,
    marginBottom: 37,
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 23.53,
    marginLeft: 22,
    marginRight: 22,
  },
  button: {
    flex: 1,
    width: 360,
    height: 49,
    backgroundColor: Colors.primaryColor,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
  },
  buttonText: {
    fontFamily: "josefsans-bold",
    color: "white",
    fontSize: 18,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardContent: {
    flex: 1,
  },
});

export default WalletScreen;

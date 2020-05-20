import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

class StoreList extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onSelect;
        }}
      >
        <View style={styles.storeListContainer}>
          <Text style={styles.store}>{this.props.storeName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  storeListContainer: {
    width: 97,
    height: 22,
    borderRadius: 10,
    backgroundColor: Colors.primaryTint,
    marginBottom: 11,
    marginLeft: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  store: {
    fontFamily: "josefsans-regular",
    fontSize: 10,
  },
});

export default StoreList;

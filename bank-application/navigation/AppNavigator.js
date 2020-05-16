import React from "react";

import { StyleSheet, Image, View } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Images } from "../assets/Images";

import IntroScreen from "../screens/IntroScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SetNewPasswordScreen from "../screens/SetNewPasswordScreen";
import DashboardScreen from "../screens/DashboardScreen";
import WalletScreen from "../screens/WalletScreen";
import CardViewScreen from "../screens/CardViewScreen";
import BarcodeScanner from "../screens/BarcodeScannerScreen";
import MyReceiptsScreen from "../screens/MyReceiptsScreen";
import AccountScreen from "../screens/AccountScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const DashboardNavigator = createStackNavigator({
  DashboardNav: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const WalletNavigator = createStackNavigator({
  Wallet: {
    screen: WalletScreen,
    navigationOptions: {
      header: null,
    },
  },
  CardView: {
    screen: CardViewScreen,
    navigationOptions: {
      header: null,
    },
  },
  BarcodeScanner: {
    screen: BarcodeScanner,
    navigationOptions: {
      header: null,
    },
  },
});

const ReceiptNavigator = createStackNavigator({
  MyReceipts: {
    screen: MyReceiptsScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const AccountNavigator = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      header: null,
    },
  },
  ManageAccount: {
    screen: MyAccountScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: DashboardNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <View style={styles.tabCircle}>
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={24}
                style={styles.icon}
                color={tabInfo.tintColor}
              />
            </View>
          );
        },
      },
    },
    Receipts: {
      screen: ReceiptNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <View style={styles.tabCircle}>
              <MaterialCommunityIcons
                name="bank"
                size={22}
                style={styles.icon}
                color={tabInfo.tintColor}
              />
            </View>
          );
        },
      },
    },
    WalletNav: {
      screen: WalletNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <View style={styles.tabCircle}>
              <AntDesign
                name="creditcard"
                size={22}
                style={styles.icon}
                color={tabInfo.tintColor}
              />
            </View>
          );
        },
      },
    },
    Account: {
      screen: AccountNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <View style={styles.tabCircle}>
              <Entypo
                name="user"
                size={22}
                style={styles.icon}
                color={tabInfo.tintColor}
              />
            </View>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: Colors.tabTint,
      showLabel: false,
    },
  }
);

const AppNavigator = createSwitchNavigator({
  Main: {
    screen: IntroScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      header: null,
    },
  },
  SetNewPass: {
    screen: SetNewPasswordScreen,
    navigationOptions: {
      header: null,
    },
  },
  Dashboard: TabNavigator,
});

const styles = StyleSheet.create({
  tabCircle: {
    width: 40,
    height: 40,
    borderRadius: 60 / 2,
    backgroundColor: Colors.secondaryColor,
    borderColor: 'white',
    borderWidth: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default createAppContainer(AppNavigator);

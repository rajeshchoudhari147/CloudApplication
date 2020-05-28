import React from "react";

import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";

import IntroScreen from "../screens/IntroScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmationCode from "../screens/ConfirmationCode";
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SetNewPasswordScreen from "../screens/SetNewPasswordScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AccountScreen from "../screens/AccountScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const DashboardNavigator = createStackNavigator({
  DashboardNav: {
    screen: DashboardScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});


const AccountNavigator = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ManageAccount: {
    screen: MyAccountScreen,
    navigationOptions: {
      headerShown: false,
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
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ConfirmationCode: {
    screen: ConfirmationCode,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SetNewPass: {
    screen: SetNewPasswordScreen,
    navigationOptions: {
      headerShown: false,
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

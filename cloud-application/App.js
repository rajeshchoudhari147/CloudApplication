import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Amplify, { Auth } from "aws-amplify";
import awsmobile from "./amplify/aws-exports";
Amplify.configure(awsmobile);

import AppNavigator from "./navigation/AppNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "josefsans-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "josefsans-thin": require("./assets/fonts/JosefinSans-Thin.ttf"),
    "josefsans-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "josefsans-italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <AppNavigator />;
}

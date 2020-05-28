import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import AppNavigator from "./navigation/AppNavigator";

import Amplify from 'aws-amplify'
import awsmobile from './amplify/aws-exports'
Amplify.configure(awsmobile)

const fetchFonts = () => {
  return Font.loadAsync({
    "josefsans-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
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

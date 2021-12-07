import React from "react";
import Navigator from "./components/Navigator";
import { LogBox } from "react-native";

// Fonts
import { useFonts } from "expo-font";

// suppressing a warning that is showing because of some default options in expo
LogBox.ignoreLogs(["AsyncStorage"]);

export default App = () => {
  // Loading fonts
  let [fontsLoaded] = useFonts({
    bungee: require("./assets/fonts/Bungee.ttf"),
    bungeeHairline: require("./assets/fonts/BungeeHairline.ttf"),
    degularDisplay: require("./assets/fonts/DegularDisplay-Light.otf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return <Navigator />;
  }
};

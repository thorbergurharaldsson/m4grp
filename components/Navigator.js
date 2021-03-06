import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import NavBar from "./NavBar";
import QrCodeScannerScreen from "../screens/QrScannerScreen";
import TreeInfoScreen from "../screens/TreeInfoScreen";
import ForestScreen from "../screens/ForestScreen";
import UserListScreen from "../screens/UserListScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="App" component={NavBar} />
        <Stack.Screen name="QrScanner" component={QrCodeScannerScreen} />
        <Stack.Screen name="TreeInfo" component={TreeInfoScreen} />
        <Stack.Screen name="Forest" component={ForestScreen} />
        <Stack.Screen name="UserList" component={UserListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

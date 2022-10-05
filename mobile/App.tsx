import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationStack } from "./app/features/Authentication/navigation/Authentication.stack";
import { Home } from "./app/features/Home/Screens/Home";
import { HomeStack } from "./app/features/Home/navigation/Home.stack";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <NavigationContainer>
        {true ? <AuthenticationStack /> : <HomeStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

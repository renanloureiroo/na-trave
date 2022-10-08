import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationStack } from "./app/features/Authentication/navigation/Authentication.stack";
import { Home } from "./app/features/Home/Screens/Home";
import { HomeStack } from "./app/features/Home/navigation/Home.stack";
import { AuthContextProvider, useAuth } from "./app/contexts/AuthContext";

export default function App() {
  const { user } = useAuth();
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <AuthContextProvider>
        <NavigationContainer>
          {!user ? <HomeStack /> : <AuthenticationStack />}
        </NavigationContainer>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}

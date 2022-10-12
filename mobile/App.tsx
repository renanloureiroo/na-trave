import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContextProvider } from "./app/contexts/AuthContext";
import { MainStack } from "./app/navigation/main";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <AuthContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}

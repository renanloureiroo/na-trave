import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SignIn } from "./app/features/signIn/Screens/SignIn";

import { SignUp } from "./app/features/SignUp/Screens/SignUp";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <SignIn />
    </GestureHandlerRootView>
  );
}

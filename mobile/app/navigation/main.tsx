import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStack } from "../features/Home/navigation/Home.stack";
import { useAuth } from "@contexts/AuthContext";
import { AuthenticationStack } from "../features/Authentication/navigation/Authentication.stack";

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = () => {
  const { user, rehydrated } = useAuth();
  return !rehydrated ? null : user ? (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Authenticated" component={HomeStack} />
    </Navigator>
  ) : (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Authentication" component={AuthenticationStack} />
    </Navigator>
  );
};

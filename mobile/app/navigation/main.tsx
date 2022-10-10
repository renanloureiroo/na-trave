import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStack } from "../features/Home/navigation/Home.stack";
import { useAuth } from "@contexts/AuthContext";
import { AuthenticationStack } from "../features/Authentication/navigation/Authentication.stack";

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = () => {
  const { user } = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user ? (
        <Screen name="Authentication" component={AuthenticationStack} />
      ) : (
        <Screen name="Authenticated" component={HomeStack} />
      )}
    </Navigator>
  );
};

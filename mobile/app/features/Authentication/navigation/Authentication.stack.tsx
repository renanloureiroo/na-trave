import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../Screens/Welcome";
import { SignIn } from "../Screens/SignIn";
import { SignUp } from "../Screens/SignUp";

export type AuthenticationStackType = {
  Welcome: {};
  SignIn: {};
  SignUp: {};
};

const { Navigator, Screen } =
  createNativeStackNavigator<AuthenticationStackType>();

export const AuthenticationStack = () => {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />

      <Screen name="SignIn" component={SignIn} />

      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";

export type HomeStackType = {
  Home: {};
  Profile: {};
};

const { Navigator, Screen } = createNativeStackNavigator<HomeStackType>();

export const HomeStack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

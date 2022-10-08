import React from "react";
import { Image, Text, View } from "react-native";

import Flag from "@assets/flags/bra.png";
import { InputCircle } from "../InputCircle";
import { CardProps } from "./Card.props";

export const Card = ({ time }: CardProps) => {
  return (
    <View className="rounded-2xl items-center p-4 border border-brand-gray3">
      <Text>{time}</Text>

      <View className="flex-row w-full mt-2 items-center justify-between">
        <Text className="uppercase ">bra</Text>
        <Image source={Flag} className="w-10 h-10 " resizeMode="contain" />

        <InputCircle />
        <Text className="text-base text-brand-red2 ">X</Text>

        <InputCircle />

        <Image source={Flag} className="w-10 h-10" resizeMode="contain" />

        <Text className="uppercase ">bra</Text>
      </View>
    </View>
  );
};

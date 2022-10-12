import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { InputCircle } from "../InputCircle";
import { CardProps } from "./Card.props";
import { format } from "date-fns/esm";

import { flags } from "../../utils/flags";

export const Card = ({ data }: CardProps) => {
  const timeFormatted = format(new Date(data.gameTime), "HH");

  return (
    <View className="rounded-2xl items-center p-4 border border-brand-gray3">
      <Text>{timeFormatted}</Text>

      <View className="flex-row w-full mt-2 items-center justify-between">
        <Text className="uppercase">{data.homeTeam.name}</Text>
        <Image
          source={data.homeTeam.flag}
          className="w-10 h-10 "
          resizeMode="contain"
        />

        <InputCircle value={String(data.homeTeam.score)} />
        <Text className="text-base text-brand-red2 ">X</Text>

        <InputCircle value={String(data.awayTeam.score)} />

        <Image
          source={data.awayTeam.flag}
          className="w-10 h-10"
          resizeMode="contain"
        />

        <Text className="uppercase">{data.awayTeam.name}</Text>
      </View>
    </View>
  );
};

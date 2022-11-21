import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { InputCircle } from "../InputCircle";
import { CardProps } from "./Card.props";
import { format } from "date-fns/esm";

export const Card = ({ data, onSubmitEditing }: CardProps) => {
  const timeFormatted = format(new Date(data.gameTime), "HH:mm");

  const [homeTeamScore, setHomeScore] = useState<number>(data.homeTeam.score);
  const [awayTeamScore, setAwayScore] = useState<number>(data.awayTeam.score);
  const gameId = data.id;

  return (
    <View className="mb-2 rounded-2xl items-center p-4 border border-brand-gray3">
      <Text>{timeFormatted}</Text>

      <View className="flex-row w-full mt-2 items-center justify-between">
        <Text className="uppercase">{data.homeTeam.name}</Text>
        <Image
          source={data.homeTeam.flag}
          className="w-10 h-10 "
          resizeMode="contain"
        />

        <InputCircle
          value={String(homeTeamScore)}
          onBlur={async () => {
            await onSubmitEditing(
              {
                homeTeamScore: Number(homeTeamScore),
                awayTeamScore: Number(awayTeamScore),
              },
              gameId
            );
          }}
          onChangeText={(value) => setHomeScore(Number(value))}
        />
        <Text className="text-base text-brand-red2">X</Text>

        <InputCircle
          onChangeText={(value) => setAwayScore(Number(value))}
          value={String(awayTeamScore)}
          onBlur={async () =>
            await onSubmitEditing(
              {
                homeTeamScore: Number(homeTeamScore),
                awayTeamScore: Number(awayTeamScore),
              },
              gameId
            )
          }
        />

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

import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { differenceInCalendarDays } from "date-fns";

import { Header } from "@components/Header";
import { DateSelect } from "@components/DateSelect";
import { Card } from "@components/Card";
import { api } from "@services/api";

import { flags } from "../../../../utils/flags";
import { HomeStackType } from "../../navigation/Home.stack";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type HunchType = {
  id: string;
  userId: string;
  gameId: string;
  homeTeamScore?: number;
  awayTeamScore?: number;
};

type TeamType = {
  name: string;
  flag: ImageSourcePropType;
  score: number;
};

type ResponseType = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  gameTime: string;
  Hunches: HunchType[];
};

export type GameType = {
  id: string;
  gameTime: string;
  homeTeam: TeamType;
  awayTeam: TeamType;
};

export type ScoresType = {
  homeTeamScore?: number;
  awayTeamScore?: number;
};

const initialDate = "2022-11-20T00:00:00Z";
export const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation<NavigationProp<HomeStackType>>();

  const [currentDate, setCurrentDate] = useState(new Date(initialDate));

  const handleSetCurrentDate = useCallback((date: Date) => {
    setCurrentDate(date);
  }, []);

  const fetchData = async (signal?: AbortSignal) => {
    try {
      const { data } = await api.get<ResponseType[]>("/games", {
        signal,
      });

      const dataFormatted = data.map((game) => {
        return {
          id: game.id,
          gameTime: game.gameTime,
          homeTeam: {
            name: game.homeTeam,
            flag: flags[game.homeTeam].image,
            score:
              game.Hunches.length == 0
                ? 0
                : game.Hunches[0].homeTeamScore
                ? game.Hunches[0].homeTeamScore
                : 0,
          } as TeamType,
          awayTeam: {
            name: game.awayTeam,
            flag: flags[game.awayTeam].image,
            score:
              game.Hunches.length == 0
                ? 0
                : game.Hunches[0].awayTeamScore
                ? game.Hunches[0].awayTeamScore
                : 0,
          } as TeamType,
        };
      });

      setGames(dataFormatted);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, []);

  const gamesFiltered = games.filter((game) => {
    const dif = differenceInCalendarDays(currentDate, new Date(game.gameTime));

    if (dif === 0) {
      return game;
    }
  });

  const handleSendScore = useCallback(
    async (scores: ScoresType, gameId: string) => {
      try {
        await api.post("/hunchs", {
          gameId,
          ...scores,
        });

        await fetchData();
      } catch (err) {
        console.log(err);
      }
    },
    []
  );

  const handleGoProfile = useCallback(() => {
    navigate("Profile");
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 pb-4"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 bg-brand-white1">
          <Header big name="Renan" iconFunction={handleGoProfile} />

          <DateSelect date={currentDate} onSetDate={handleSetCurrentDate} />

          <ScrollView showsVerticalScrollIndicator={false} className="px-6">
            {gamesFiltered.map((item) => (
              <Card
                key={item.id}
                onSubmitEditing={handleSendScore}
                data={item}
              />
            ))}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

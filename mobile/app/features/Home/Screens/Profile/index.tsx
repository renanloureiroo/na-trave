import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useAuth } from "@contexts/AuthContext";
import { api } from "@services/api";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

type MyHunchType = {
  id: string;
  userId: string;
  gameId: string;
  homeTeamScore: number;
  awayTeamScore: number;
  game: {
    id: string;
    homeTeam: string;
    awayTeam: string;
    gameTime: string;
  };
};

export const Profile = () => {
  const [data, setData] = useState<MyHunchType[]>([]);
  const { onSignOut } = useAuth();

  const fetchData = async () => {
    const { data } = await api.get("/hunchs");
    setData(data);
    console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <Header
        big
        fullName="Renan Loureiro"
        iconRightFunction={onSignOut}
        iconRight="profile"
      />
      <View className="flex-1 px-6">
        {/* <FlatList
        data={gamesFiltered}
        renderItem={({ item }) => (
          <Card onSubmitEditing={handleSendScore} data={item} />
        )}
        keyExtractor={(item) => item.id}
        className="px-6"
      /> */}
      </View>
    </SafeAreaView>
  );
};

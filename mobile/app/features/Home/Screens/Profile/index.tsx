import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useAuth } from "@contexts/AuthContext";
import { api } from "@services/api";
import { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

export const Profile = () => {
  const { onSignOut } = useAuth();

  const fetchData = async () => {
    const response = api.get("/hunchs");
    console.log(response);
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

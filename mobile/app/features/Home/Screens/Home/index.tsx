import { SafeAreaView, Text, View } from "react-native";

import { Header } from "../../../../components/Header/Header";
export const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-brand-white1">
        <Header big name="Renan" />
      </View>
    </SafeAreaView>
  );
};

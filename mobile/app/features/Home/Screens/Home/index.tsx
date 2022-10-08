import { useState } from "react";
import { FlatList, Platform, View } from "react-native";

import { Header } from "@components/Header";
import { DateSelect } from "@components/DateSelect";
import { Card } from "@components/Card";

const data = [
  {
    id: "1",
    time: "10:00",
  },
  {
    id: "2",
    time: "12:00",
  },
  {
    id: "3",
    time: "14:00",
  },
];

export const Home = () => {
  return (
    <View className="flex-1 bg-brand-white1">
      <Header big name="Renan" />

      <DateSelect />

      <FlatList
        data={data}
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View style={[{ height: 10 }, highlighted && { marginLeft: 0 }]} />
          ))
        }
        renderItem={({ item }) => <Card time={item.time} />}
        keyExtractor={(item) => item.id}
        className="px-6"
      />
    </View>
  );
};

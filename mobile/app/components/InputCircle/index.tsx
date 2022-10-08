import React from "react";
import { TextInput, View } from "react-native";

export const InputCircle = () => {
  return (
    <View className="w-10 h-10 items-center justify-center rounded-full bg-brand-red3/20">
      <TextInput
        placeholder="0"
        keyboardType="numeric"
        placeholderTextColor={"#BB2E57"}
        className="text-brand-red2 text-base text-center font-bold flex-1 pb-1"
      />
    </View>
  );
};

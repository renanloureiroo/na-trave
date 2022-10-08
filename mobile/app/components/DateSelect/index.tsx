import React, { useState } from "react";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { format, subDays, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import IconArrowLeft from "@assets/icons/arrow-left.svg";
import IconArrowRight from "@assets/icons/arrow-right.svg";

const initialDate = "2022-11-20T00:00:00Z";
export const DateSelect = () => {
  const [currentDate, setCurrentDate] = useState(new Date(initialDate));
  const prevDay = () => {
    const nextDate = subDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  const nextDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };
  return (
    <View className="flex-row my-8 w-full items-center justify-center">
      <BorderlessButton onPress={prevDay}>
        <IconArrowLeft width={24} height={24} color={"#AF053F"} />
      </BorderlessButton>

      <Text className="mx-8 font-bold text-base text-brand-red1">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </Text>

      <BorderlessButton onPress={nextDay}>
        <IconArrowRight width={24} height={24} color={"#AF053F"} />
      </BorderlessButton>
    </View>
  );
};

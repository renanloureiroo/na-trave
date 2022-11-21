import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { format, subDays, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import IconArrowLeft from "@assets/icons/arrow-left.svg";
import IconArrowRight from "@assets/icons/arrow-right.svg";

interface DateSelectProps {
  date: Date;
  onSetDate: (date: Date) => void;
}

export const DateSelect = ({ date, onSetDate }: DateSelectProps) => {
  const prevDay = () => {
    const nextDate = subDays(date, 1);
    onSetDate(nextDate);
  };

  const nextDay = () => {
    const nextDate = addDays(date, 1);
    onSetDate(nextDate);
  };
  return (
    <View className="flex-row my-8 w-full items-center justify-center">
      <TouchableOpacity onPress={prevDay}>
        <IconArrowLeft width={24} height={24} color={"#AF053F"} />
      </TouchableOpacity>

      <Text className="mx-8 font-bold text-base text-brand-red1">
        {format(date, "d 'de' MMMM", { locale: ptBR })}
      </Text>

      <TouchableOpacity onPress={nextDay}>
        <IconArrowRight width={24} height={24} color={"#AF053F"} />
      </TouchableOpacity>
    </View>
  );
};

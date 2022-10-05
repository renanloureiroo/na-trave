import React from "react";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { HeaderProps } from "./Header.props";

import BackIcon from "../../assets/icons/back.svg";

const StyledBorderlessButton = styled(BorderlessButton);

export const Header = ({ title }: HeaderProps) => {
  return (
    <View className="w-full flex-row items-center mb-8">
      <StyledBorderlessButton>
        <BackIcon width={32} height={32} color={"#AF053F"} />
      </StyledBorderlessButton>

      <Text className="text-2xl text-brand-red1 font-bold ml-5">{title}</Text>
    </View>
  );
};

import React from "react";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { HeaderProps } from "./Header.props";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import BackIcon from "../../assets/icons/back.svg";
import { AuthenticationStackType } from "../../features/Authentication/navigation/Authentication.stack";

const StyledBorderlessButton = styled(BorderlessButton);

export const Header = ({ title, iconFunction }: HeaderProps) => {
  const { goBack } = useNavigation<NavigationProp<AuthenticationStackType>>();

  const handleGoBack = () => {
    goBack();
  };

  const onPress = iconFunction || handleGoBack;

  return (
    <View className="w-full flex-row items-center mb-8">
      <StyledBorderlessButton onPress={onPress}>
        <BackIcon width={32} height={32} color={"#AF053F"} />
      </StyledBorderlessButton>

      <Text className="text-2xl text-brand-red1 font-bold ml-5">{title}</Text>
    </View>
  );
};

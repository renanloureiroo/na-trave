import React from "react";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { HeaderProps } from "./Header.props";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import BackIcon from "@assets/icons/back.svg";
import Logo from "@assets/logo/logo-fundo-vinho.svg";
import ProfileIcon from "@assets/icons/profile.svg";

import { AuthenticationStackType } from "../../features/Authentication/navigation/Authentication.stack";
const StyledBorderlessButton = styled(BorderlessButton);

export const Header = ({
  title,
  iconFunction,
  big = false,
  name,
  fullName,
}: HeaderProps) => {
  const { goBack } = useNavigation<NavigationProp<AuthenticationStackType>>();

  const handleGoBack = () => {
    goBack();
  };

  const onPress = iconFunction || handleGoBack;

  if (big) {
    return (
      <View className="w-full justify-between h-56 px-5 py-8 pt-11 bg-brand-red2">
        <View className="flex-row w-full items-center justify-between">
          <Logo width={80} height={24} />

          <ProfileIcon width={32} height={32} color={"#F4F6FF"} />
        </View>
        <View>
          <Text className="text-base text-brand-gray3 mb-3">Olá, {name}!</Text>

          <Text className="text-brand-white1 text-3xl font-bold">
            {fullName ? fullName : "Qual é o seu palpite?"}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="w-full flex-row items-center mb-8">
      <StyledBorderlessButton onPress={onPress}>
        <BackIcon width={32} height={32} color={"#AF053F"} />
      </StyledBorderlessButton>

      <Text className="text-2xl text-brand-red1 font-bold ml-5">{title}</Text>
    </View>
  );
};

import React from "react";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { HeaderProps } from "./Header.props";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import BackIcon from "@assets/icons/back.svg";
import Logo from "@assets/logo/logo-fundo-vinho.svg";
import ProfileIcon from "@assets/icons/profile.svg";
import SignOutIcon from "@expo/vector-icons/Ionicons";

import { AuthenticationStackType } from "../../features/Authentication/navigation/Authentication.stack";
const StyledBorderlessButton = styled(BorderlessButton);

export const Header = ({
  title,
  iconFunction,
  big = false,
  iconRight = "home",
  iconRightFunction,
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
          {!!fullName ? (
            <BorderlessButton onPress={onPress}>
              <BackIcon width={32} height={32} color={"#ffffff"} />
            </BorderlessButton>
          ) : (
            <Logo width={80} height={24} />
          )}
          <BorderlessButton
            onPress={iconRightFunction ? iconRightFunction : onPress}
          >
            {iconRight === "home" ? (
              <ProfileIcon width={32} height={32} color={"#F4F6FF"} />
            ) : (
              <SignOutIcon name="exit-outline" size={32} color={"#F4F6FF"} />
            )}
          </BorderlessButton>
        </View>
        <View>
          {!!name && (
            <Text className="text-base text-brand-gray3 mb-3">
              Olá, {name}!
            </Text>
          )}

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
        <BorderlessButton onPress={onPress}>
          <BackIcon width={32} height={32} color={"#AF053F"} />
        </BorderlessButton>
      </StyledBorderlessButton>

      <Text className="text-2xl text-brand-red1 font-bold ml-5">{title}</Text>
    </View>
  );
};

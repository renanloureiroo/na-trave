import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Button } from "../../../../components/Button/Button";
import ImageBackground from "../../../../assets/imagem/img.png";
import Logo from "../../../../assets/logo/logo-fundo-vermelho.svg";

export const Welcome = () => {
  return (
    <SafeAreaView className={`flex-1 bg-brand-red1`}>
      <View className="flex-1 items-center p-5">
        <Logo width={80} height={24} />

        <Image
          source={ImageBackground}
          resizeMode="cover"
          className="w-[320px] h-[320px] mt-6 mb-2"
        />
        <Text className="text-[32px] leading-10 text-brand-white1 text-center font-bold my-4">
          Dê o seu palpite na{"\n"}Copa do Mundo do{"\n"}Catar 2022!{" "}
        </Text>

        <Button title={"Criar minha conta"} />

        <Button variant="secondary" title={"Fazer login"} />
      </View>
    </SafeAreaView>
  );
};

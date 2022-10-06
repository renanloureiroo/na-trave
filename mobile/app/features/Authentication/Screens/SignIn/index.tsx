import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Header } from "../../../../components/Header/Header";
import { Input } from "../../../../components/Input/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../../../components/Button/Button";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres!")
    .required("Campo obrigatório!"),
});

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const inputRefPassword = useRef<TextInput>(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        className={`flex-1 bg-brand-white1 ${
          Platform.OS === "android" && "pt-6"
        }`}
      >
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="flex-1"
        >
          <View className="flex-1 p-5">
            <StatusBar translucent backgroundColor="transparent" style="dark" />
            <Header title="Entre na sua conta" />

            <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                label="Seu e-mail"
                autoCorrect={false}
                autoFocus
                autoCapitalize="none"
                control={control}
                onSubmitEditing={() => inputRefPassword.current.focus()}
                name="email"
              />
              <Input
                label="Sua senha"
                autoCorrect={false}
                autoCapitalize="none"
                ref={inputRefPassword}
                control={control}
                name="password"
                password
              />
            </ScrollView>
            <Button title="Entrar" theme="dark" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

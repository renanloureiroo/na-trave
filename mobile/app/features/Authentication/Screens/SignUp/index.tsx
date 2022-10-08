import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
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

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Header } from "@components/Header";
import { Input } from "@components/Input";

import { Button } from "@components/Button";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório!"),
  username: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres!")
    .required("Campo obrigatório!"),
});

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const inputRefUsername = useRef<TextInput>(null);
  const inputRefEmail = useRef<TextInput>(null);
  const inputRefPassword = useRef<TextInput>(null);

  const handleCreateAccount = (values) => {
    console.log("test");
    console.log(values);
  };

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
          <StatusBar translucent backgroundColor="transparent" style="dark" />
          <View className="flex-1 p-5">
            <Header title="Crie sua conta" />

            <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                label="Seu nome"
                control={control}
                name="name"
                autoFocus
                onBlur={() => inputRefUsername.current.focus()}
                autoCorrect={false}
                error={!!errors.name && (errors.name.message as string)}
              />

              <Input
                label="Seu nome de usuário"
                control={control}
                name="username"
                autoCapitalize="none"
                onBlur={() => inputRefEmail.current.focus()}
                ref={inputRefUsername}
                error={!!errors.username && (errors.username.message as string)}
              />

              <Input
                label="Seu e-mail"
                control={control}
                name="email"
                onBlur={() => inputRefPassword.current.focus()}
                ref={inputRefEmail}
                autoCorrect={false}
                autoCapitalize="none"
                error={!!errors.email && (errors.email.message as string)}
              />

              <Input
                label="Sua senha"
                control={control}
                name="password"
                ref={inputRefPassword}
                autoCorrect={false}
                autoCapitalize="none"
                password
                error={!!errors.password && (errors.password.message as string)}
              />
            </ScrollView>
            <Button
              title="Crie minha conta"
              theme="dark"
              onPress={handleSubmit(handleCreateAccount)}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import jwt from "jwt-decode";
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
import { Header } from "@components/Header";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { api } from "@services/api";
import { useAuth } from "@contexts/AuthContext";
import { User } from "@contexts/AuthContext/AuthContext.props";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório!"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres!")
    .required("Campo obrigatório!"),
});

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updatedCredentials, onSignIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    setIsLoading(true);
    try {
      const { data } = await api.post(
        "/users/signin",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        }
      );

      const { accessToken, refreshToken } = data;
      const { id, name, username } = jwt(accessToken) as User;

      updatedCredentials({ accessToken, refreshToken });
      onSignIn({ id, name, username });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
                error={errors.email && (errors.email.message as string)}
              />
              <Input
                label="Sua senha"
                autoCorrect={false}
                autoCapitalize="none"
                ref={inputRefPassword}
                control={control}
                name="password"
                password
                error={errors.password && (errors.password.message as string)}
              />
            </ScrollView>
            <Button
              disabled={isLoading}
              loading={isLoading}
              title="Entrar"
              theme="dark"
              onPress={handleSubmit(handleSignIn)}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

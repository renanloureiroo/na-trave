import React, { forwardRef, useState } from "react";
import { Controller } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import { InputProps } from "./Input.props";

import Icon from "@expo/vector-icons/MaterialIcons";
import { BorderlessButton } from "react-native-gesture-handler";
import { styled } from "nativewind";

const StyledBorderlessButton = styled(BorderlessButton);

export const Input = forwardRef<TextInput, InputProps>(
  (
    { label, control, name, password = false, error, onFocus, onBlur, ...rest },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleToggleVisibility = () => {
      setIsVisible((state) => !state);
    };

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View className="w-full mt-4">
            <Text
              className={`mb-2 ${
                isFocused ? "text-brand-grey1" : "text-brand-grey2"
              } text-sm font-bold`}
            >
              {label}
            </Text>
            <View
              className={`w-full h-12 rounded-2xl bg-brand-white1 ${
                !error ? "border-brand-grey2" : "border-red-600"
              } flex-row items-center ${
                isFocused ? "border-[2px] border-brand-grey1" : "border"
              }`}
            >
              <TextInput
                ref={ref}
                value={value}
                secureTextEntry={password && isVisible}
                onFocus={(e) => {
                  setIsFocused(true);
                  onFocus && onFocus(e);
                }}
                onBlur={(e) => {
                  setIsFocused(false);
                  onBlur && onBlur(e);
                }}
                onChangeText={onChange}
                className="flex-1 text-base px-2 pb-1"
                {...rest}
              />

              {password &&
                (isVisible ? (
                  <StyledBorderlessButton
                    onPress={handleToggleVisibility}
                    className="mx-2"
                  >
                    <Icon name="visibility-off" color={"#91949D"} size={24} />
                  </StyledBorderlessButton>
                ) : (
                  <StyledBorderlessButton
                    onPress={handleToggleVisibility}
                    className="mx-2"
                  >
                    <Icon name="visibility" color={"#91949D"} size={24} />
                  </StyledBorderlessButton>
                ))}
            </View>

            {error && <Text className="text-red-600 text-sm">{error}</Text>}
          </View>
        )}
      />
    );
  }
);

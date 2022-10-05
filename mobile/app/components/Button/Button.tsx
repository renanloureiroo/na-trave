import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./Button.props";

export const Button = ({
  title,
  backgroundColor = "#AF053F",
  variant = "primary",
  theme = "light",
  ...rest
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <TouchableOpacity
        testID="btnPrimaryVariant"
        style={{ borderRadius: 16 }}
        {...rest}
        className={`w-full h-12 mt-4 ${
          theme === "light" ? "bg-brand-white1" : "bg-brand-red2"
        }`}
      >
        <View
          accessibilityRole="button"
          className={`w-full h-full items-center justify-center`}
        >
          <Text
            className={`${
              theme === "light" ? "text-brand-red1" : "text-brand-white1"
            } text-base font-bold`}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      testID="btnSecondaryVariant"
      style={{ borderRadius: 16 }}
      className="w-full h-12 mt-4"
      {...rest}
    >
      <View
        className="w-full h-full justify-center items-center border border-brand-white1"
        accessibilityRole="button"
      >
        <Text className="text-brand-white1 text-base font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

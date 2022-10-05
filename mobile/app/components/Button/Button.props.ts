import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
  theme?: "light" | "dark";
  backgroundColor?: string;
}

export { ButtonProps };

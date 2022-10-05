import { TextInputProps } from "react-native";
import { Control } from "react-hook-form";

interface InputProps extends TextInputProps {
  label: string;
  control: Control;
  name: string;
  error?: string;
}

export { InputProps };

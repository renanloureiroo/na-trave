interface HeaderProps {
  title?: string;
  iconFunction?: () => void;
  iconRight?: "profile" | "home";
  iconRightFunction?: () => void;
  big?: boolean;
  name?: string;
  fullName?: string;
}

export { HeaderProps };

import { StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonThemeStyleType = {
  container: {
    disabled: StyleProp<ViewStyle>;
    active: StyleProp<ViewStyle>;
    pressed: StyleProp<ViewStyle>;
  };
  text: {
    disabled: StyleProp<TextStyle>;
    active: StyleProp<TextStyle>;
    pressed: StyleProp<TextStyle>;
  };
};

type ButtonThemeType = {
  primary: ButtonThemeStyleType;
  secondary: ButtonThemeStyleType;
};

export type ButtonStyles = {
  light: ButtonThemeType;
  dark: ButtonThemeType;
};

type ButtonSizingStyleType = {
  container: StyleProp<ViewStyle>;
  content: StyleProp<ViewStyle>;
  text: StyleProp<TextStyle>;
};

export type ButtonSizing = {
  l: ButtonSizingStyleType;
  m: ButtonSizingStyleType;
  s: ButtonSizingStyleType;
};

export type ButtonStatusType = "active" | "disabled" | "pressed";

export type ButtonType = "primary" | "secondary";

export type ButtonSizeType = "l" | "m" | "s";

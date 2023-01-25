import { TextStyle } from "react-native";

export type TextType =
  | "black"
  | "blackItalic"
  | "bold"
  | "boldItalic"
  | "italic"
  | "light"
  | "lightItalic"
  | "medium"
  | "mediumItalic"
  | "regular";

export type TextHeader = "h1" | "h2" | "h3" | "h4" | "h5";

export type TextBody = "xl" | "l" | "m" | "mm" | "s" | "sm" | "xs" | "xsm";

export type ColorType =
  | "black"
  | "white"
  | "gray"
  | "grayDark"
  | "grayStroke"
  | "grayLight"
  | "greenMain"
  | "red";

export type ThemeColors = Record<ColorType, string>;
export type ThemeTextTypes = Record<TextType, Partial<TextStyle>>;
export type ThemeTextHeaders = Record<TextHeader, Partial<TextStyle>>;
export type ThemeTextBodies = Record<TextBody, Partial<TextStyle>>;

export interface Theme {
  colors: ThemeColors;
  textTypes: ThemeTextTypes;
  textHeaders: ThemeTextHeaders;
  textBodies: ThemeTextBodies;
}

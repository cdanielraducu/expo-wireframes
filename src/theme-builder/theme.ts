import { Theme, ThemeTextTypes } from "./types";

const textTypes: ThemeTextTypes = {
  black: { fontFamily: "Satoshi-Black", fontWeight: "900" },
  blackItalic: { fontFamily: "Satoshi-BlackItalic", fontWeight: "900" },
  bold: { fontFamily: "Satoshi-Bold", fontWeight: "700" },
  boldItalic: { fontFamily: "Satoshi-BoldItalic", fontWeight: "700" },
  italic: { fontFamily: "Satoshi-Italic", fontWeight: "400" },
  light: { fontFamily: "Satoshi-Light", fontWeight: "200" },
  lightItalic: { fontFamily: "Satoshi-LightItalic", fontWeight: "200" },
  medium: { fontFamily: "Satoshi-Medium", fontWeight: "500" },
  mediumItalic: { fontFamily: "Satoshi-MediumItalic", fontWeight: "500" },
  regular: { fontFamily: "Satoshi-Regular", fontWeight: "400" },
};

export const theme: Theme = {
  colors: {
    black: "#1F1F1F",
    white: "#FFFFFF",
    red: "#D61818",
    gray: "#A1A1A6",
    grayDark: "#363636",
    grayStroke: "#E4E4E4",
    grayLight: "#F9F9F9",
    greenMain: "#285C41",
  },
  textTypes: textTypes,
  textHeaders: {
    h1: { fontSize: 36, lineHeight: 44, ...textTypes.medium },
    h2: { fontSize: 32, lineHeight: 36, ...textTypes.bold },
    h3: { fontSize: 24, lineHeight: 32, ...textTypes.bold },
    h4: { fontSize: 18, lineHeight: 24, ...textTypes.bold },
    h5: { fontSize: 16, lineHeight: 20, ...textTypes.medium },
  },
  textBodies: {
    xl: { fontSize: 20, lineHeight: 24, ...textTypes.medium },
    l: { fontSize: 16, lineHeight: 20, ...textTypes.regular },
    m: { fontSize: 14, lineHeight: 18, ...textTypes.regular },
    mm: { fontSize: 14, lineHeight: 18, ...textTypes.medium },
    s: { fontSize: 12, lineHeight: 16, ...textTypes.regular },
    sm: { fontSize: 12, lineHeight: 14, ...textTypes.medium },
    xs: { fontSize: 10, lineHeight: 14, ...textTypes.medium },
    xsm: { fontSize: 10, lineHeight: 14, ...textTypes.bold },
  },
};

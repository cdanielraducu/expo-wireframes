import { ReactNode, useMemo } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Builder from "../builder/Builder";
import useBuilderContext from "../builder/useBuilderContext";
import { theme } from "./theme";
import { Theme } from "./types";

interface ThemeBuilderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeBuilderProps> = ({ children }) => {
  return <Builder<Theme> initialState={theme}>{children}</Builder>;
};

export const useTheme = () => useBuilderContext<Theme>();

type makeStylesType = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  V
>(
  styles: T | ((theme: Theme, props: V) => T)
) => (props?: V) => T;

export const makeStyles: makeStylesType = (styles) => (props) => {
  const { entity: theme } = useTheme();

  return useMemo(() => {
    const css = typeof styles === "function" ? styles(theme, props) : styles;

    return StyleSheet.create(css);
  }, [props, theme]);
};

export default ThemeProvider;

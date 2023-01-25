import { ReactNode } from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { makeStyles } from "../theme-builder/ThemeBuilder";

export interface BaseTileItemContainerProps {
  children: ReactNode;
  testID?: string;
  hasSeparator?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

function BaseTileItemContainer({
  children,
  testID,
  hasSeparator,
  style,
  onPress,
}: BaseTileItemContainerProps) {
  const styles = useStyles();

  const content = (
    <View
      testID={testID}
      style={[styles.wrapper, hasSeparator && styles.separatorStyle, style]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return <Pressable onPress={onPress}>{content}</Pressable>;
  }
  return content;
}

const useStyles = makeStyles(({ colors }) => ({
  wrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  separatorStyle: {
    borderBottomColor: colors.grayStroke,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
}));

export default BaseTileItemContainer;

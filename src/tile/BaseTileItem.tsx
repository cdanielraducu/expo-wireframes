import { ReactNode } from "react";
import { View } from "react-native";
import { TextProps } from "../Text/Text";
import { makeStyles } from "../ThemeBuilder/ThemeBuilder";
import BaseTileItemContainer, {
  BaseTileItemContainerProps,
} from "./BaseTileItemContainer";
import BaseTileItemText from "./BaseTileText";

export interface BaseTileItemProps
  extends Omit<BaseTileItemContainerProps, "children"> {
  text: string;
  rowContentLeftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textProps?: TextProps;
}

function BaseTileItem({
  testID,
  text,
  textProps,
  hasSeparator,
  rowContentLeftIcon,
  rightIcon,
  style,
  onPress,
}: BaseTileItemProps) {
  const styles = useStyles();

  return (
    <BaseTileItemContainer
      style={style}
      testID={testID}
      hasSeparator={hasSeparator}
      onPress={onPress}
    >
      <View style={styles.rowContainer}>
        {rowContentLeftIcon}
        <BaseTileItemText text={text} {...textProps} />
      </View>
      {rightIcon}
    </BaseTileItemContainer>
  );
}

const useStyles = makeStyles(() => ({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
}));

export default BaseTileItem;

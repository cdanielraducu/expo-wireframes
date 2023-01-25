import {
  LayoutChangeEvent,
  StyleProp,
  Text as TextRN,
  TextStyle,
} from "react-native";
import Animated from "react-native-reanimated";
import useBuilderContext from "../builder/useBuilderContext";
import { TextBody, TextHeader, TextType, Theme } from "../theme-builder/types";

/** We give the AnimatedText a Text component from RN because it needs a class component */
export const AnimatedText = Animated.createAnimatedComponent(TextRN);

export interface TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  testID?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
  /**
   * This is used for setting the font family type
   * @default regular
   */
  type?: TextType;
  /**
   * This is used to select one fontStyle of a header from the default headers styles
   */
  header?: TextHeader;
  /**
   * This is used to select one fontStyle of a body from the default bodies styles
   */
  body?: TextBody;
}

const Text: React.FC<TextProps> = ({
  children,
  style,
  testID,
  onLayout,
  type = "regular",
  header,
  body,
}) => {
  const {
    entity: { colors, textTypes, textBodies, textHeaders },
  } = useBuilderContext<Theme>();

  return (
    <TextRN
      style={[
        { color: colors.black },
        style,
        !!body && textBodies[body],
        !!header && textHeaders[header],
        textTypes[type],
      ]}
      testID={testID}
      onLayout={onLayout}
    >
      {children}
    </TextRN>
  );
};

export default Text;

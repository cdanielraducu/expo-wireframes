import { ReactNode, useCallback, useMemo, useState } from "react";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import debounce from "lodash.debounce";
import {
  ButtonSizeType,
  ButtonSizing,
  ButtonStatusType,
  ButtonStyles,
  ButtonType,
} from "./types";
import Text, { TextProps } from "../text/Text";
import { makeStyles, useTheme } from "../theme-builder/ThemeBuilder";

interface ButtonProps {
  onPress: () => void;
  testID?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textProps?: TextProps;
  buttonLabel?: string;
  icon?: ReactNode;
  /**
   * @default primary
   */
  buttonType?: ButtonType;
  /**
   * @default l
   */
  buttonSize?: ButtonSizeType;
  /**
   * @default light
   */
  buttonThemeType?: "light" | "dark";
}

function Button({
  onPress,
  testID,
  children,
  isLoading,
  disabled,
  style,
  textProps,
  buttonLabel,
  icon,
  buttonType = "primary",
  buttonSize = "l",
  buttonThemeType = "light",
}: ButtonProps) {
  const {
    entity: { colors },
  } = useTheme();

  const styles = useStyles();

  const [isPressed, setIsPressed] = useState(false);

  const buttonStatus: ButtonStatusType = useMemo(() => {
    if (disabled || isLoading) {
      return "disabled";
    }
    if (isPressed) {
      return "pressed";
    }
    return "active";
  }, [disabled, isLoading, isPressed]);

  const buttonStyles: ButtonStyles = {
    light: {
      primary: {
        container: {
          disabled: {
            backgroundColor: colors.grayStroke,
          },
          active: {
            backgroundColor: colors.black,
          },
          pressed: { backgroundColor: colors.grayDark },
        },
        text: {
          disabled: {
            color: colors.gray,
          },
          active: {
            color: colors.white,
          },
          pressed: {
            color: colors.grayStroke,
          },
        },
      },
      secondary: {
        container: {
          disabled: {
            backgroundColor: colors.grayStroke,
            borderWidth: 1,
            borderColor: "transparent",
          },
          active: {
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.grayStroke,
          },
          pressed: {
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.black,
          },
        },
        text: {
          disabled: {
            color: colors.gray,
          },
          active: {
            color: colors.black,
          },
          pressed: {
            color: colors.black,
          },
        },
      },
    },
    dark: {
      primary: {
        container: {
          disabled: {
            backgroundColor: colors.grayDark,
          },
          active: {
            backgroundColor: colors.white,
          },
          pressed: { backgroundColor: colors.grayStroke },
        },
        text: {
          disabled: {
            color: colors.gray,
          },
          active: {
            color: colors.black,
          },
          pressed: {
            color: colors.grayDark,
          },
        },
      },
      secondary: {
        container: {
          disabled: {
            backgroundColor: colors.grayDark,
            borderWidth: 1,
            borderColor: "transparent",
          },
          active: {
            backgroundColor: colors.black,
            borderWidth: 1,
            borderColor: colors.grayDark,
          },
          pressed: {
            backgroundColor: colors.black,
            borderWidth: 1,
            borderColor: colors.white,
          },
        },
        text: {
          disabled: {
            color: colors.gray,
          },
          active: {
            color: colors.white,
          },
          pressed: {
            color: colors.white,
          },
        },
      },
    },
  };

  const buttonSizingStyles: ButtonSizing = {
    l: {
      container: {
        width: "100%",
        flexDirection: "column",
      },
      content: { padding: 16 },
      text: { fontSize: 14, lineHeight: 24 },
    },
    m: {
      container: {
        width: "88%",
        flexDirection: "column",
      },
      content: {
        padding: 16,
      },
      text: {
        fontSize: 12,
        lineHeight: 16,
      },
    },
    s: {
      container: {
        flexDirection: "row",
      },
      content: {
        padding: 8,
      },
      text: { fontSize: 12, lineHeight: 16 },
    },
  };

  const buttonThemeStyle = buttonStyles[buttonThemeType][buttonType];
  const buttonSizeStyle = buttonSizingStyles[buttonSize];

  const onPressDebounced = useCallback(
    debounce(onPress, 300, { leading: true, trailing: true }),
    [debounce, onPress]
  );

  return (
    <View style={buttonSizeStyle.container}>
      <Pressable
        testID={testID ?? "button"}
        disabled={disabled}
        style={[
          styles.buttonContainer,
          buttonThemeStyle.container[buttonStatus],
          style,
        ]}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPressDebounced}
      >
        {buttonLabel ? (
          <View style={[styles.buttonContent, buttonSizeStyle.content]}>
            {icon}
            <Text
              type="bold"
              style={[
                buttonThemeStyle.text[buttonStatus],
                buttonSizeStyle.text,
                {
                  alignSelf: "center",
                  textAlignVertical: "center",
                  paddingLeft: icon ? 4 : 0,
                },
              ]}
              {...textProps}
            >
              {buttonLabel}
            </Text>
          </View>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
}

interface ButtonStylesExtraProp {
  error: boolean;
}

const useStyles = makeStyles(() => ({
  buttonContainer: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default Button;

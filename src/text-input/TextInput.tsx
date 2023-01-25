import { FC, useRef, useState } from "react";
import {
  StyleProp,
  View,
  ViewStyle,
  TextInput as TextInputRN,
  TextInputProps as TextInputPropsRN,
  Pressable,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated";
import AlertInfoIcon from "../icons/AlertInfoIcon";
import Text, { AnimatedText } from "../text/Text";
import { makeStyles, useTheme } from "../theme-builder/ThemeBuilder";

const FOCUSED_PLACEHOLDER_Y_POSITION = -10;
const UNFOCUSED_PLACEHOLDER_Y_POSITION = 0;

const FOCUSED_PLACEHOLDER_FONT_SIZE = 10;
const FOCUSED_PLACEHOLDER_LINE_HEIGHT = 14;
const UNFOCUSED_PLACEHOLDER_FONT_SIZE = 14;
const UNFOCUSED_PLACEHOLDER_LINE_HEIGHT = 16;

const FOCUSED_MAIN_TEXT_TOP_POSITION = 8;
const UNFOCUSED_MAIN_TEXT_TOP_POSITION = 0;

const AnimatedTextInput = Animated.createAnimatedComponent(TextInputRN);

const TIMING_CONFIG: WithTimingConfig = { duration: 200 };
const HIT_SLOP = { bottom: 16, top: 16, left: 16, right: 16 };

interface TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  errorText?: string;
  rightIcon?: FC;
  onRightIconPress?: () => void;
  leftIcon?: FC;
  onLeftIconPress?: () => void;
  leftText?: string;
  type?: "search";
  label?: string;
  disabled?: boolean;
}

export type TextInputBaseProps = TextInputProps &
  Omit<TextInputPropsRN, "theme" | "error" | "right" | "left">;

function TextInput({
  style,
  containerStyle,
  label,
  errorText,
  disabled,
  rightIcon,
  onRightIconPress,
  onLeftIconPress,
  leftIcon,
  leftText,
  type,
  value,
  onChangeText,
  placeholder,
  ...props
}: TextInputBaseProps) {
  const {
    entity: { colors, textTypes, textBodies },
  } = useTheme();

  const inputRef = useRef<TextInputRN>(null);

  const hasErrors = (errorText?.length ?? 0) > 0 && !disabled;
  const [isFocused, setIsFocused] = useState(false);

  const styles = useStyles({ hasErrors, isFocused });

  const focusStyle = !disabled && isFocused && styles.focusStyle;
  const disabledStyle = disabled && styles.disabledStyle;

  const errorStyle = hasErrors && styles.errorStyle;
  const errorIcon = <AlertInfoIcon />;

  const hasRightIcon = !!rightIcon;
  const hasRightItem = hasErrors || !!rightIcon;

  const rightInputIcon =
    hasRightIcon &&
    rightIcon({
      ...styles.inputIconColor,
      onPress: onRightIconPress,
    });

  const hasLeftText = (leftText?.length ?? "") > 0;
  const hasLeftIcon = !!leftIcon;
  const hasLeftItem = hasLeftIcon || hasLeftText;

  const leftInputText = hasLeftText ? (
    <Text style={styles.inputAffixText}>{leftText}</Text>
  ) : null;

  const leftInputIcon =
    hasLeftIcon &&
    leftIcon({
      ...styles.inputIconColor,
      onPress: onLeftIconPress,
    });

  const hasLabel = (label?.length ?? "") > 0;
  const hasValue = (value?.length ?? "") > 0;
  const showLabel = !hasLeftItem && hasLabel;
  const fullTextInput = hasLeftItem || hasRightItem;

  const showPlaceholderValue = disabled || !hasValue;
  const placeholderValue = showPlaceholderValue ? placeholder ?? label : value;

  const animatedPlaceholder = useAnimatedStyle(() => {
    const translateY =
      isFocused || hasValue
        ? withTiming(FOCUSED_PLACEHOLDER_Y_POSITION, TIMING_CONFIG)
        : withTiming(UNFOCUSED_PLACEHOLDER_Y_POSITION, TIMING_CONFIG);

    return { transform: [{ translateY }] };
  }, [isFocused, hasValue]);

  const animatedPlaceholderText = useAnimatedStyle(() => {
    const fontSize =
      isFocused || hasValue
        ? withTiming(FOCUSED_PLACEHOLDER_FONT_SIZE, TIMING_CONFIG)
        : withTiming(UNFOCUSED_PLACEHOLDER_FONT_SIZE, TIMING_CONFIG);
    const lineHeight =
      isFocused || hasValue
        ? withTiming(FOCUSED_PLACEHOLDER_LINE_HEIGHT, TIMING_CONFIG)
        : withTiming(UNFOCUSED_PLACEHOLDER_LINE_HEIGHT, TIMING_CONFIG);

    return { fontSize, lineHeight };
  }, [isFocused, hasValue]);

  const textInputAnimatedStyle = useAnimatedStyle(() => {
    const top =
      isFocused || hasValue
        ? withTiming(FOCUSED_MAIN_TEXT_TOP_POSITION, TIMING_CONFIG)
        : withTiming(UNFOCUSED_MAIN_TEXT_TOP_POSITION, TIMING_CONFIG);
    return { top };
  }, [isFocused, hasValue]);

  return (
    <View style={containerStyle}>
      <Pressable
        style={[
          styles.inputContainer,
          hasRightItem && styles.rightContainer,
          focusStyle,
          errorStyle,
          disabledStyle,
          style,
        ]}
        onPress={() => {
          inputRef.current?.focus();
        }}
      >
        <View
          style={[
            styles.leftContainer,
            (hasLeftItem || hasRightItem) && styles.rowContainer,
          ]}
        >
          {hasLeftIcon ? leftInputIcon : leftInputText}
          <AnimatedTextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            hitSlop={HIT_SLOP}
            style={[
              styles.inputContent,
              showLabel && textInputAnimatedStyle,
              hasLeftItem && styles.leftIconContentPosition,
              disabledStyle,
              textBodies.mm,
              fullTextInput && { flex: 1 },
            ]}
            placeholderTextColor={colors.gray}
            placeholder={placeholderValue}
            {...props}
          />
          {showLabel && (
            <Animated.View
              style={[styles.animatedLabelContainer, animatedPlaceholder]}
            >
              <AnimatedText
                style={[
                  textTypes.medium,
                  styles.animatedLabelText,
                  animatedPlaceholderText,
                ]}
              >
                {label}
              </AnimatedText>
            </Animated.View>
          )}
          {hasErrors ? errorIcon : rightInputIcon}
        </View>
        {disabled && <View style={styles.emptyViewContainer} />}
      </Pressable>
      {hasErrors && (
        <Text style={[styles.helperText]} testID={`helper-${props.testID}`}>
          {errorText}
        </Text>
      )}
    </View>
  );
}

const useStyles = makeStyles(
  (
    { colors },
    { hasErrors, isFocused }: { hasErrors: boolean; isFocused: boolean }
  ) => ({
    focusStyle: { borderColor: colors.greenMain },
    disabledStyle: {
      backgroundColor: colors.grayLight,
      color: colors.gray,
    },
    errorStyle: { borderColor: colors.red },
    inputAffixText: {
      paddingLeft: 4,
      color: isFocused ? colors.greenMain : colors.black,
    },
    inputIconColor: {
      zIndex: 5,
      color: isFocused ? colors.greenMain : colors.black,
    },
    leftContainer: { zIndex: 5 },
    rightContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    inputContainer: {
      borderWidth: 1.2,
      borderRadius: 4,
      borderColor: colors.grayStroke,
      paddingVertical: 20,
      paddingHorizontal: 16,
      backgroundColor: "transparent",
    },
    inputContent: { zIndex: 5, backgroundColor: colors.white },
    rowContainer: { flexDirection: "row", alignItems: "center" },
    leftIconContentPosition: {
      paddingLeft: 12,
      paddingRight: 16,
    },
    helperText: {
      marginTop: 0,
      marginLeft: 2,
      marginBottom: 12,
      opacity: hasErrors ? 1 : 0,
      color: colors.red,
    },
    animatedLabelContainer: {
      position: "absolute",
    },
    animatedLabelText: { color: colors.gray },
    emptyViewContainer: {
      position: "absolute",
      height: 60,
      zIndex: 6,
      flex: 1,
      width: "100%",
    },
  })
);

export default TextInput;

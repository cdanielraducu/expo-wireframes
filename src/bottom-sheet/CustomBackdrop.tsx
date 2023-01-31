import { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";
import { makeStyles } from "../theme-builder/ThemeBuilder";

interface CustomBackdropProps {
  handleClose: () => void;
}

function CustomBackdrop({
  animatedIndex,
  style,
  handleClose,
}: BottomSheetBackdropProps & CustomBackdropProps) {
  const styles = useStyles();

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolate.CLAMP
    ),
    display: animatedIndex.value === -1 ? "none" : "flex",
  }));

  const containerStyle = useMemo(
    () => [style, styles.container, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );

  return (
    <TapGestureHandler onEnded={handleClose}>
      <Animated.View style={containerStyle} />
    </TapGestureHandler>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "rgba(14, 14 ,14, 0.25)",
  },
}));

export default CustomBackdrop;

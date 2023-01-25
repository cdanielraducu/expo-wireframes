import Svg, { SvgProps, Path } from "react-native-svg";
import { useTheme } from "../theme-builder/ThemeBuilder";

function CloseIcon({ ...props }: SvgProps) {
  const {
    entity: { colors },
  } = useTheme();

  return (
    <Svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        d="m5.813 5 10 10M15.813 5l-10 10"
        stroke={props?.color ?? colors.gray}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;

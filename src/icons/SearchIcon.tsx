import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { useTheme } from "../theme-builder/ThemeBuilder";

function SearchIcon({ ...props }: SvgProps) {
  const {
    entity: { colors },
  } = useTheme();

  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Circle
        cx={12.204}
        cy={11.767}
        r={8.989}
        stroke={props.color ?? colors.gray}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.456 18.485 21.98 22"
        stroke={props.color ?? colors.gray}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;

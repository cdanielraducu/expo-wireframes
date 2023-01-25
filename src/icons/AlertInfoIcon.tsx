import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { useTheme } from "../theme-builder/ThemeBuilder";

function AlertInfoIcon({ ...props }: SvgProps) {
  const {
    entity: { colors },
  } = useTheme();

  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Circle
        cx={12.438}
        cy={12}
        r={11}
        stroke={props.color ?? colors.red}
        strokeWidth={1.5}
      />
      <Path
        d="M12.438 7v5M12.438 16v.5"
        stroke={props.color ?? colors.red}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AlertInfoIcon;

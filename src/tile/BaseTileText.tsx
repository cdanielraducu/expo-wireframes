import Text, { TextProps } from "../text/Text";

interface BaseTileItemTextProps extends TextProps {
  text: string;
}

const BaseTileItemText = ({ text, ...props }: BaseTileItemTextProps) => {
  return (
    <Text header="h5" {...props}>
      {text}
    </Text>
  );
};

export default BaseTileItemText;

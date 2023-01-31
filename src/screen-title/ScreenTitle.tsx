import { StyleProp, TextStyle } from 'react-native';
import Text from 'src/text/Text'

import { makeStyles } from '../theme-builder/ThemeBuilder';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

function ScreenTitle({ children, style, testID }: Props) {
  const styles = useStyles();

  return (
    <Text header="h3" style={[styles.title, style]} testID={testID}>
      {children}
    </Text>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 24,
    marginBottom: 4,
  },
}));

export default ScreenTitle;

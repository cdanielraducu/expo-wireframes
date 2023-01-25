import { View } from 'react-native';
import Text from '../text/Text';

function ListEmptyComponent() {
  return (
    <View style={{ marginLeft: 16 }}>
      <Text header="h4">No items yet</Text>
    </View>
  );
}

export default ListEmptyComponent;

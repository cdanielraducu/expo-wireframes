import { View } from 'react-native';
import Text from '../Text/Text';

function ListEmptyComponent() {
  return (
    <View style={{ marginLeft: 16 }}>
      <Text header="h4">No items yet</Text>
    </View>
  );
}

export default ListEmptyComponent;

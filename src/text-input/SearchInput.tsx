import { StyleProp, ViewStyle } from "react-native";
import CloseIcon from "../icons/CloseIcon";
import SearchIcon from "../icons/SearchIcon";
import TextInput from "./TextInput";

interface Props {
  value: string;
  onChangeText: (query: string) => void;
  placeholder?: string;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
function SearchInput({
  value,
  onChangeText,
  placeholder = "Search",
  testID,
  style,
  disabled,
}: Props) {
  return (
    <TextInput
      testID={testID}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      leftIcon={SearchIcon}
      type="search"
      rightIcon={value.length > 0 ? CloseIcon : undefined}
      onRightIconPress={() => onChangeText("")}
      style={style}
      disabled={disabled}
    />
  );
}

export default SearchInput;

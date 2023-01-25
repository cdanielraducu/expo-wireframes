import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { makeStyles } from "../theme-builder/ThemeBuilder";
import ListEmptyComponent from "./ListEmptyComponent";

interface ListItemProps {
  id: string;
}

interface ListProps<T extends ListItemProps> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

function List<T extends ListItemProps>({ data, renderItem }: ListProps<T>) {
  const styles = useStyles();

  return (
    <FlatList
      contentContainerStyle={styles.content}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      scrollEnabled
      renderItem={renderItem}
      data={data}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

const useStyles = makeStyles(() => ({
  content: { paddingBottom: 32, flex: 1 },
  list: { paddingTop: 24, paddingRight: 8 },
}));

export default List;

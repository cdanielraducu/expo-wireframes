import * as React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "./src/button/Button";
import ThemeProvider from "./src/theme-builder/ThemeBuilder";
import useModal from "./src/modal/useModal";
import Modal from "./src/modal/Modal";
import BaseTileItem from "./src/tile/BaseTileItem";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Satoshi-Black": require("./src/assets/fonts/Satoshi-Black.otf"),
    "Satoshi-BlackItalic": require("./src/assets/fonts/Satoshi-BlackItalic.otf"),
    "Satoshi-Bold": require("./src/assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-BoldItalic": require("./src/assets/fonts/Satoshi-BoldItalic.otf"),
    "Satoshi-Italic": require("./src/assets/fonts/Satoshi-Italic.otf"),
    "Satoshi-Light": require("./src/assets/fonts/Satoshi-Light.otf"),
    "Satoshi-LightItalic": require("./src/assets/fonts/Satoshi-LightItalic.otf"),
    "Satoshi-Medium": require("./src/assets/fonts/Satoshi-Medium.otf"),
    "Satoshi-MediumItalic": require("./src/assets/fonts/Satoshi-MediumItalic.otf"),
    "Satoshi-Regular": require("./src/assets/fonts/Satoshi-Regular.otf"),
  });

  const { isOpen, onOpen, onClose } = useModal();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Button buttonLabel="Open modal" onPress={onOpen} />
        <View style={styles.container}>
          <Modal isOpen={isOpen} onClose={onClose}>
            <BaseTileItem text="daa" />
          </Modal>
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

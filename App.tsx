import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "./src/button/Button";
import Text from "./src/Text/Text";
import ThemeProvider from "./src/ThemeBuilder/ThemeBuilder";

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Text body="l" type="regular">
            Open up App.tsx to start working on your app!
          </Text>
          <Button onPress={() => {}} buttonLabel="text" buttonSize="m" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

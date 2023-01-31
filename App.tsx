import * as React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "./src/button/Button";
import ThemeProvider from "./src/theme-builder/ThemeBuilder";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "src/screens/HomeScreen";
import { useAuth0, Auth0Provider } from "react-native-auth0";

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider>
          <Auth0Provider
            domain={"test-auth0-mobile.eu.auth0.com"}
            clientId={"YThKL6Vr6Eu0s3zayYBUfzgrrhUXuaGU"}
          >
            <BottomSheetModalProvider>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
            </BottomSheetModalProvider>
          </Auth0Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
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

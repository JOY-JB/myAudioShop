import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import store from "./src/Store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <Navigation />
      </SafeAreaView>
      <StatusBar style="auto" />
    </Provider>
  );
}

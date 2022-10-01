import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform } from "react-native";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";
import store from "./src/Store";

const persistor = persistStore(store);

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
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingTop: Platform.OS === "android" ? 35 : 0,
          }}
        >
          <Navigation />
        </SafeAreaView>
        <StatusBar style="auto" />
        <FlashMessage position="top" statusBarHeight={30} />
      </PersistGate>
    </Provider>
  );
}

import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";

export default function BannerTitle() {
  return (
    <View style={styles.container}>
      <Image source={require("../images/audiophile.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});

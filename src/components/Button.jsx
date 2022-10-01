import { StyleSheet } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "./Text/Text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Button({ btnStyle, textStyle, onPress, children }) {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, btnStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: colors.black,
    borderRadius: spacing[2],
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
  },
});

import { Text as RnText, StyleSheet } from "react-native";
import React from "react";
import { presets } from "./Text.preset";

export default function Text({ children, preset = "default", style }) {
  const textStyle = StyleSheet.compose(presets[preset], style);

  return <RnText style={textStyle}>{children}</RnText>;
}

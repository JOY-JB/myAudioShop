import { Text as RnText } from "react-native";
import React from "react";
import { presets } from "./Text.preset";

export default function Text({ children, preset = "default", style }) {
  return <RnText style={[presets[preset], style]}>{children}</RnText>;
}

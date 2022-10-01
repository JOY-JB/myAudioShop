import { View, Text } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";

export default function CounterButton({ setAmount, initialAmount }) {
  const [count, setCount] = useState(initialAmount || 0);

  const incrementPress = () => {
    setCount((prev) => prev + 1);
    setAmount(count + 1);
  };

  const decrementPress = () => {
    if (count > 0) {
      setAmount(count - 1);
      setCount((prev) => prev - 1);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: spacing[1],
        paddingVertical: spacing[2],
      }}
    >
      <Pressable onPress={decrementPress}>
        <AntDesign
          name="minus"
          size={16}
          color="black"
          style={{ marginHorizontal: spacing[4] }}
        />
      </Pressable>
      <Text preset="h6" style={{ marginHorizontal: spacing[2] }}>
        {count}
      </Text>
      <Pressable onPress={incrementPress}>
        <AntDesign
          name="plus"
          size={16}
          color="black"
          style={{ marginHorizontal: spacing[4] }}
        />
      </Pressable>
    </View>
  );
}

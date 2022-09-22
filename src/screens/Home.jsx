import { View } from "react-native";
import React, { useEffect } from "react";
import Text from "../components/Text/Text";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

import { View, ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Text from "../components/Text/Text";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import Button from "../components/Button";

export default function Checkout({ navigation }) {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Pressable
          style={{ marginVertical: spacing[3] }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>

        <View>
          <Text preset="h3">CHECKOUT</Text>
          <Text style={{ marginTop: spacing[5], color: colors.primary }}>
            SHIPPING DETAILS
          </Text>

          <View style={styles.inputGroup}>
            <Text>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name"
            ></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Text>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email Address"
            ></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Text>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Phone No."
              keyboardType="numeric"
            ></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Text>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your City Name"
            ></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Text>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Address"
            ></TextInput>
          </View>
        </View>

        <Button
          btnStyle={{
            backgroundColor: colors.primary,
            marginTop: 100,
          }}
          textStyle={{ fontSize: 18 }}
        >
          Confirm
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing[3],
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: spacing[2],
    padding: 10,
    borderRadius: spacing[2],
  },
  inputGroup: {
    marginVertical: spacing[3],
  },
});

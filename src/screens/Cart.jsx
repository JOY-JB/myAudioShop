import { View, Image, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import BannerTitle from "../components/BannerTitle";
import Text from "../components/Text/Text";
import { spacing } from "../theme/spacing";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  reset,
  selectCart,
  selectTotalAmount,
} from "../Store/cartSlice";
import { colors } from "../theme/colors";
import CounterButton from "../components/CounterButton";
import Button from "../components/Button";

export default function Cart({ navigation }) {
  const cartData = useSelector(selectCart);
  const dispatch = useDispatch();

  const onAmountChange = (amount, item) => {
    if (amount < 1) {
      return Alert.alert(
        "Remove item ?",
        "Do you want to remove this item from cart ?",
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Remove",
            onPress: () => dispatch(deleteFromCart({ id: item.id })),
          },
        ]
      );
    }

    const cartProduct = {
      ...item,
      amount,
      totalPrice: amount * item.price,
    };

    dispatch(addToCart(cartProduct));
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <BannerTitle />
        <View style={{ marginHorizontal: spacing[4] }}>
          <View style={styles.topbar}>
            <Text preset="h5">Cart ({cartData.length})</Text>

            <Pressable onPress={() => dispatch(reset())}>
              <Text>Remove all</Text>
            </Pressable>
          </View>

          {cartData.map((item) => {
            return (
              <View key={item.id} style={styles.cartList}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: colors.grey,
                      width: 70,
                      height: 70,
                      borderRadius: spacing[2],
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={item.featuredImage.source}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={{ marginHorizontal: spacing[3] }}>
                    <Text preset="h6">{item.name}</Text>
                    <Text preset="title">$ {item.price}</Text>
                  </View>
                </View>
                <View>
                  <CounterButton
                    setAmount={(amount) => onAmountChange(amount, item)}
                    initialAmount={item.amount}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          marginHorizontal: spacing[3],
          bottom: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text preset="h5">Total : </Text>
          <Text preset="h5">{useSelector(selectTotalAmount)}</Text>
        </View>
        <Button
          btnStyle={{
            backgroundColor: colors.primary,
          }}
          textStyle={{ fontSize: 18 }}
          onPress={() => navigation.navigate("Checkout")}
        >
          CHECKOUT
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    marginVertical: spacing[4],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: spacing[2],
  },
});

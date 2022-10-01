import { ScrollView, View, Image, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../Store/ProductSlice";
import { AntDesign } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { colors } from "../theme/colors";
import Text from "../components/Text/Text";
import Button from "../components/Button";
import CounterButton from "../components/CounterButton";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { addToCart, selectCart } from "../Store/cartSlice";

export default function ProductDetails({ navigation, route }) {
  const [amount, setAmount] = useState(0);
  const id = route.params.id;

  const cartData = useSelector(selectCart);

  const isProductInCart = cartData.filter((item) => item.id === id);

  const {
    featuredImage,
    name,
    price,
    description,
    features,
    includedItems,
    images,
  } = useSelector((state) => selectProductById(state, id));

  const dispatch = useDispatch();

  const addToCartPress = () => {
    if (amount === 0) {
      return showMessage({
        message: "You can not add 0 items",
        type: "danger",
      });
    }

    const addedProduct = {
      id,
      name,
      featuredImage,
      price,
      amount,
      totalPrice: amount * price,
    };

    dispatch(addToCart(addedProduct));

    showMessage({
      message: "Product added successfully !",
      type: "success",
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={{ marginVertical: spacing[3] }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>

      <View style={styles.imageView}>
        <Image style={{ alignSelf: "center" }} source={featuredImage.source} />
      </View>

      <View>
        <Text preset="h3" style={{ marginVertical: spacing[3] }}>
          {name}
        </Text>
        <Text
          preset="title"
          style={{ color: "#7d7d7d", marginVertical: spacing[4] }}
        >
          {description}
        </Text>
        <Text preset="h5">${price}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginVertical: spacing[10],
        }}
      >
        <CounterButton
          setAmount={setAmount}
          initialAmount={
            isProductInCart.length !== 0 ? isProductInCart[0].amount : null
          }
        />

        <Button
          btnStyle={{ backgroundColor: colors.primary }}
          onPress={addToCartPress}
        >
          Add to cart
        </Button>
      </View>

      <View>
        <Text preset="h4" style={{ marginVertical: spacing[2] }}>
          FEATURES
        </Text>
        <Text
          preset="title"
          style={{ color: "#7d7d7d", marginVertical: spacing[1] }}
        >
          {features}
        </Text>
      </View>

      {includedItems && (
        <View style={{ marginVertical: spacing[10] }}>
          <Text preset="h4" style={{ marginVertical: spacing[3] }}>
            IN THE BOX
          </Text>
          {includedItems.map((item, index) => (
            <View key={index} style={{ flexDirection: "row" }}>
              <Text
                preset="title"
                style={{ color: colors.primary, marginRight: spacing[5] }}
              >
                {item.amount}x
              </Text>
              <Text preset="title" style={{ color: colors.black }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      )}

      <View style={{ alignItems: "center", marginVertical: spacing[4] }}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image.source}
            style={{
              marginVertical: spacing[3],
              width: "100%",
              borderRadius: spacing[3],
            }}
            resizeMode="cover"
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing[4],
  },
  imageView: {
    backgroundColor: colors.grey,
    borderRadius: spacing[3],
    padding: spacing[5],
  },
});

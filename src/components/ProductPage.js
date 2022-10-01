import { View, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Text from "../components/Text/Text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import BannerTitle from "../components/BannerTitle";
import Button from "../components/Button";

export default function ProductPage({ data, title, navigation }) {
  const productDetails = (id) => {
    navigation.navigate("productDetails", { id });
  };

  return (
    <ScrollView>
      <BannerTitle />
      <View
        style={{
          backgroundColor: colors.black,
          justifyContent: "center",
          alignItems: "center",
          borderTopColor: colors.grey,
          borderTopWidth: 0.2,
          paddingVertical: spacing[2],
        }}
      >
        <Text preset="h4" style={{ color: colors.white }}>
          {title}
        </Text>
      </View>

      <View style={{ marginVertical: spacing[5] }}>
        {data.map((item) => {
          return (
            <View key={item.id} style={styles.container}>
              <View
                style={{
                  backgroundColor: colors.grey,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: spacing[3],
                  paddingVertical: spacing[8],
                }}
              >
                <Image source={item.featuredImage.source} />
              </View>

              <View
                style={{
                  marginVertical: spacing[4],
                }}
              >
                <Text preset="h5" style={{ alignSelf: "center" }}>
                  {item.name}
                </Text>
                <Text preset="h4" style={{ alignSelf: "center" }}>
                  {item.category}
                </Text>

                <Text
                  style={{
                    marginHorizontal: spacing[3],
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  {item.description}
                </Text>
              </View>

              <Button
                btnStyle={{
                  marginTop: spacing[4],
                  backgroundColor: colors.primary,
                }}
                onPress={() => productDetails(item.id)}
              >
                SEE PRODUCTS
              </Button>
            </View>
          );
        })}
      </View>

      <View style={styles.container}>
        <Image
          source={require("../images/man-with-hp.png")}
          resizeMode="cover"
        />

        <View style={{ paddingVertical: spacing[6] }}>
          <Text preset="h4" style={{ textTransform: "uppercase" }}>
            Bringing you the
          </Text>
          <Text preset="h4" style={{ textTransform: "uppercase" }}>
            <Text preset="h4" style={{ color: colors.primary }}>
              best
            </Text>{" "}
            audio gear
          </Text>
        </View>

        <Text style={{ color: "#c3c3c3", textAlign: "center" }}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[8],
    marginHorizontal: spacing[5],
    justifyContent: "center",
    alignItems: "center",
  },
});

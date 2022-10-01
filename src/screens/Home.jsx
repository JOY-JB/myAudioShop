import { View, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BannerTitle from "../components/BannerTitle";
import { colors } from "../theme/colors";
import Text from "../components/Text/Text";
import { spacing } from "../theme/spacing";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectFeatureProducts } from "../Store/ProductSlice";
import Button from "../components/Button";

const CatagoryBox = ({ title, image, onPress }) => (
  <Pressable style={styles.catagoryBox} onPress={onPress}>
    <Image source={image} style={styles.catagoryImage} />

    <View style={{ top: -20 }}>
      <Text preset="h6">{title}</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text preset="overlineq">Shop</Text>
      <MaterialIcons name="navigate-next" size={24} color={colors.primary} />
    </View>
  </Pressable>
);

const FeatureBox = ({ item, navigation }) => {
  const { width } = useWindowDimensions();

  const { name, category, featuredImage } = item;

  const seeProducts = (id) => {
    navigation.navigate("productDetails", { id });
  };

  return (
    <View style={styles.featureBox}>
      <View
        style={[styles.featureRound, { height: width - 80, width: width - 80 }]}
      >
        <View
          style={[
            styles.featureRound,
            { height: width - 50, width: width - 50 },
          ]}
        >
          <Image
            source={featuredImage.source}
            resizeMode="contain"
            style={{ width: 180 }}
          />
        </View>
      </View>

      <View>
        <Text
          preset="h3"
          style={{ color: colors.white, top: -10, alignSelf: "center" }}
        >
          {name}
        </Text>
        <Text
          preset="h3"
          style={{ color: colors.white, top: -10, alignSelf: "center" }}
        >
          {category}
        </Text>
        <Text
          preset="title"
          style={{
            textAlign: "center",
            color: colors.white,
            marginTop: 10,
          }}
        >
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>
      </View>

      <Button
        btnStyle={{ marginTop: spacing[9] }}
        onPress={() => seeProducts(item.id)}
      >
        See Products
      </Button>
    </View>
  );
};

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();

  const featureProducts = useSelector(selectFeatureProducts);

  return (
    <View>
      <ScrollView>
        <BannerTitle />
        <View>
          <View style={styles.bannerView}>
            <Image
              style={{ alignSelf: "center", width: "100%" }}
              resizeMode="cover"
              source={require("../images/home-banner.png")}
            />
          </View>

          <View style={styles.bannerText}>
            <Text preset="h2" style={{ color: colors.white }}>
              Welcome
            </Text>
            <Text
              preset="title"
              style={{
                color: colors.white,
                marginTop: spacing[3],
                width: width - 45,
                textAlign: "center",
              }}
            >
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </Text>
          </View>
        </View>

        <View style={styles.catagoryView}>
          <CatagoryBox
            title="HEADPHONE"
            image={require("../images/home-headphone.png")}
            onPress={() => navigation.navigate("HeadphonesTab")}
          />

          <CatagoryBox
            title="SPEAKERS"
            image={require("../images/home-speaker.png")}
            onPress={() => navigation.navigate("SpeakersTab")}
          />

          <CatagoryBox
            title="EARPHONES"
            image={require("../images/home-earphone.png")}
            onPress={() => navigation.navigate("EarphonesTab")}
          />
        </View>

        <View style={styles.featureView}>
          <Text preset="h4" style={{ alignSelf: "center" }}>
            FEATURED PRODUCTS
          </Text>

          {featureProducts.map((item) => (
            <FeatureBox key={item.id} item={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerView: {
    width: "100%",
    backgroundColor: colors.black,
  },
  bannerText: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 200,
    width: "100%",
  },
  catagoryView: {
    marginVertical: spacing[10],
    marginHorizontal: spacing[3],
  },

  catagoryBox: {
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: spacing[5],
    marginVertical: spacing[9],
  },

  catagoryImage: {
    top: -60,
  },

  featureView: {
    marginHorizontal: spacing[3],
  },

  featureBox: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: spacing[5],
    marginVertical: spacing[7],
  },

  featureRound: {
    borderRadius: 500,
    borderColor: colors.grey,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});

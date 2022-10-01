import React from "react";
import { useSelector } from "react-redux";
import { selectHeadphones } from "../Store/ProductSlice";
import ProductPage from "../components/ProductPage";

export default function Headphones({ navigation }) {
  const headphonesData = useSelector(selectHeadphones);

  return (
    <ProductPage
      data={headphonesData}
      title="HEADPHONES"
      navigation={navigation}
    />
  );
}

import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "../components/ProductPage";
import { selectEarphones } from "../Store/ProductSlice";

export default function Earphones({ navigation }) {
  const earphonesData = useSelector(selectEarphones);

  return (
    <ProductPage
      data={earphonesData}
      title="EARPHONES"
      navigation={navigation}
    />
  );
}

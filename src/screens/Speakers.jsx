import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "../components/ProductPage";
import { selectSpeakers } from "../Store/ProductSlice";

export default function Speakers({ navigation }) {
  const speakersData = useSelector(selectSpeakers);

  return (
    <ProductPage data={speakersData} title="SPEAKERS" navigation={navigation} />
  );
}

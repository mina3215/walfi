import React from "react";
import { StyleSheet, Image } from "react-native";
import images from "../../../assets/images";
import { ScreenHeight, ScreenWidth } from "./../fightcomponents/ScreenSize";

const Card = ({ cType, cNumber, cStyle = 1 }) => {
  const imageWidth = ScreenWidth * 0.2 * cStyle;
  const imageHeight = ScreenHeight * 0.159 * cStyle;

  return (
    <Image
      source={images.battle[`${cType}_${cNumber}`]}
      style={{ ...styles.image, width: imageWidth, height: imageHeight }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    // backgroundColor: "yellow"
  },
});

export default Card;

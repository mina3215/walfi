import images from "../../../common/imgDict.js";
import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { globalStyles } from "../homestyles/global.js";
import { useSelector, useDispatch } from "react-redux";
import GameHeader from "../homecomponents/GameHeader.js";
import PageHeader from "../homecomponents/PageHeader.js";
import Animal from "../../fight/fightcomponents/Animal.jsx";
import Accessory from "../homecomponents/accessory/Accessory.jsx";
import AccessoryList from "../homecomponents/accessory/AccessoryList.jsx";
import { State } from "react-native-gesture-handler";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../homecomponents/ScreenSize.js";
import {
  setAnimalDeco,
  sendAnimalDeco,
  setPressedAccessory,
} from "../homeSlice.js";
import {
  PanGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

export const AnimalDeco = ({ navigation }) => {
  const dispatch = useDispatch();

  const selectAnimal = useSelector((state) => state.home.pressedAnimal);
  const selectAccessory = useSelector((state) => state.home.pressedAccessory);

  const [lastOffset, setLastOffset] = useState({ x: 0, y: 0 });
  const [rotationValue, setRotationValue] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);

  const translateX = new Animated.Value(lastOffset.x);
  const translateY = new Animated.Value(lastOffset.y); // 좌표

  const rotate = new Animated.Value(rotationValue / 360); // 초기값 설정
  const lastRotate = { r: 0 };

  useEffect(() => {
    rotate.setValue(rotationValue / 360); // 회전
  }, [rotationValue]);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX, // 좌표
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.BEGAN) {
      translateX.setOffset(lastOffset.x);
      translateY.setOffset(lastOffset.y);
      translateX.setValue(0);
      translateY.setValue(0);
    }
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let newX = lastOffset.x + event.nativeEvent.translationX;
      let newY = lastOffset.y + event.nativeEvent.translationY;

      const boundary = {
        left: -SCREEN_WIDTH * 0.23,
        right: SCREEN_WIDTH * 0.23,
        top: -SCREEN_HEIGHT * 0.13,
        bottom: SCREEN_HEIGHT * 0.13,
      };

      if (newX < boundary.left) newX = boundary.left;
      if (newX > boundary.right) newX = boundary.right;
      if (newY < boundary.top) newY = boundary.top;
      if (newY > boundary.bottom) newY = boundary.bottom;

      setLastOffset({ x: newX, y: newY });

      translateX.setOffset(newX); // 최종 드랍 좌표
      translateY.setOffset(newY);
      translateX.setValue(0); // 드래그 시작 좌표
      translateY.setValue(0);
    }
  };

  const onRotateGestureEvent = Animated.event(
    // 회전
    [
      {
        nativeEvent: {
          rotation: rotate,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onRotateHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      // 회전
      lastRotate.r += event.nativeEvent.rotation;
      rotate.setOffset(lastRotate.r);
      rotate.setValue(0);
    }
  };

  const handleConfirm = () => {
    const commonData = {
      characterIdx: selectAnimal.characterIdx,
      itemIdx: selectAccessory[1],
      y: translateY._value,
      x: translateX._value,
      rotation: rotationValue,
      size: scaleValue,
    };

    const decoData = {
      ...commonData,
      characterType: selectAnimal.characterType,
      itemName: selectAccessory[0].toUpperCase().replace("_", ""),
    };

    dispatch(setAnimalDeco(decoData)); // 리덕스
    dispatch(setPressedAccessory("")); // 리덕스
    dispatch(sendAnimalDeco(commonData)); // 서버
    navigation.navigate("GameHome");
  };

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={images.Background.deco}
        style={[globalStyles.bgImg, styles.backImage]}
      >
        <GameHeader />
        <PageHeader navigation={navigation} color={"#0066FF"} title={"치장"} />
        <View style={styles.mainContent}>
          <View style={styles.select}>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.gage}
                minimumValue={1}
                maximumValue={3}
                step={0.1}
                value={scaleValue}
                onValueChange={(value) => setScaleValue(value)} // 크기 조절
                thumbTintColor="gold"
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#0000FF"
              />
            </View>
            <View style={styles.gap}></View>
            <View style={styles.selectBack}>
              <Animal
                aType={selectAnimal ? selectAnimal.characterType : null}
                aColor={selectAnimal ? selectAnimal.color : null}
                aSize={2}
              />
              <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
              >
                <Animated.View
                  style={[
                    {
                      transform: [
                        { translateX: translateX },
                        { translateY: translateY },
                      ],
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <RotationGestureHandler
                    onGestureEvent={onRotateGestureEvent}
                    onHandlerStateChange={onRotateHandlerStateChange}
                  >
                    <Animated.View
                      style={[
                        {
                          transform: [
                            {
                              rotate: rotate.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["360deg", "0deg"],
                              }),
                            },
                          ],
                        },
                      ]}
                    >
                      <Accessory
                        aType={selectAccessory ? selectAccessory[0] : null}
                        aSize={scaleValue}
                        rotationValue={rotationValue}
                      />
                    </Animated.View>
                  </RotationGestureHandler>
                </Animated.View>
              </PanGestureHandler>
            </View>
            <View style={styles.gap}></View>
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.gage}
                minimumValue={0}
                maximumValue={360}
                step={1}
                value={rotationValue}
                onValueChange={(value) => setRotationValue(value)} // 회전 조절
                thumbTintColor="gold"
                minimumTrackTintColor="#00FF00"
                maximumTrackTintColor="#0000FF"
              />
            </View>
          </View>
          <AccessoryList />
          <View style={styles.confirm}>
            <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
              <Text style={styles.confirmText}>확정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  backImage: {
    // alignItems: "center",
  },
  mainContent: {
    flex: 7,
    // backgroundColor: "red",
  },
  select: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "gold",
  },
  sliderContainer: {
    width: "10%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    // backgroundColor: "gold"
  },
  gage: {
    width: "600%",
    height: "100%",
    transform: [{ rotate: "-90deg" }],
    // backgroundColor:"red",
  },
  gap: {
    width: "3%",
  },
  selectBack: {
    width: "60%",
    height: "90%",
    // flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    // backgroundColor: "gold",
  },
  confirm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "purple",
  },
  confirmBtn: {
    width: "70%",
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confirmText: {
    color: "#0066FF",
    fontWeight: "bold",
    fontSize: 35,
  },
});

export default AnimalDeco;

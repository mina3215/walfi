import React, { useState } from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground, 
  TouchableOpacity, 
  Modal, 
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { 
  changeColor, 
  getRandomCharacter, 
  getRandomTenCharacter, 
  getRandomItem,
  updatePoint } 
from '../homeSlice.js';
import { globalStyles } from '../homestyles/global.js';
import { images } from '../../../common/imgDict.js';

import GameHeader from '../homecomponents/GameHeader.js';
import PageHeader from '../homecomponents/PageHeader.js';

const typeList = {
  EAGLE: "독수리",
  LION: "사자",
  PANDA: "판다",
  QUOKKA: "쿼카",
  SHIBA: "시바",
  TIGER: "호랑이",
  MOLLY: "몰리",
};

export default function Market({ navigation }) {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [tenCharacterList, setTenCharacterList] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <View style={globalStyles.container}>
      <ImageBackground
        source={images.Background.market}
        style={[globalStyles.bgImg, { alignItems: 'center' }]}
      >
        {/* 모달 코드 */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible1}
        >
          <OneEgg
            modalVisible1={modalVisible1}
            setModalVisible1={setModalVisible1}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <TenEgg
            modalVisible2={modalVisible2}
            setModalVisible2={setModalVisible2}
            tenCharacterList={tenCharacterList}
            setTenCharacterList={setTenCharacterList}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <Color
            modalVisible3={modalVisible3}
            setModalVisible3={setModalVisible3}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);
          }}
        >
          <Item 
            modalVisible4={modalVisible4}
            setModalVisible4={setModalVisible4}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </Modal>
        <GameHeader />
        <PageHeader navigation={navigation} color={'#FFC700'} title={'상점'} />
        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={() => setSelectedBtn(1)}
            style={[
              styles.btnStyle,
              { backgroundColor: selectedBtn === 1 ? "#138383" : "#00B1B1" },
            ]}
          >
            <Text style={styles.btnText}>🥚 동물 알</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedBtn(2)}
            style={[
              styles.btnStyle,
              { backgroundColor: selectedBtn === 2 ? "#138383" : "#00B1B1" },
            ]}
          >
            <Text style={styles.btnText}>🎨 동물 색상</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedBtn(3)}
            style={[
              styles.btnStyle,
              { backgroundColor: selectedBtn === 3 ? "#138383" : "#00B1B1" },
            ]}
          >
            <Text style={styles.btnText}>🎁 치장 아이템</Text>
          </TouchableOpacity>
        </View>
        {/* 컨텐츠 렌더링 */}
        <RenderContent
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          modalVisible={modalVisible1}
          setModalVisible1={setModalVisible1}
          modalVisible2={modalVisible2}
          setModalVisible2={setModalVisible2}
          modalVisible3={modalVisible3}
          setModalVisible3={setModalVisible3}
          modalVisible4={modalVisible4}
          setModalVisible4={setModalVisible4}
          selectedCharacter={selectedCharacter}
          setSelectedCharacter={setSelectedCharacter}
          tenCharacterList={tenCharacterList}
          setTenCharacterList={setTenCharacterList}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </ImageBackground>
      <StatusBar />
    </View>
  );
}

// 컨텐츠 렌더링 함수
function RenderContent(props) {
  const userId = useSelector((state) => state.auth.userId);
  const mainCharacter = useSelector((state) => state.home.mainCharacter);
  const userInfo = useSelector((state) => state.home.userGameInfo);
  const dispatch = useDispatch();

  // 알 1개 뽑기
  const randomCharacter = async () => {
    try {
      if (userInfo.point < 1000) {
        Alert.alert("경고", "포인트가 부족합니다!", [
          { text: "확인", onPress: () => {}, style: "default" },
        ]);
      } else {
        dispatch(updatePoint({ point: -1000, userId: userId }));
        dispatch(getRandomCharacter(userId)).then((response) => {
          props.setSelectedCharacter(response.payload);
          props.setModalVisible1(true);
        });
      }
    } catch (err) {
      console.log("randomCharacter", err);
    }
  };

  // 알 10개 뽑기 함수
  const randomTenCharacter = async () => {
    try {
      if (userInfo.point < 9000) {
        Alert.alert("경고", "포인트가 부족합니다!", [
          { text: "확인", onPress: () => {}, style: "default" },
        ]);
      } else {
        dispatch(updatePoint({ point: -9000 }));
        dispatch(getRandomTenCharacter()).then((response) => {
          props.setTenCharacterList(response.payload);
          props.setModalVisible2(true);
        });
      }
    } catch (err) {
      console.log("randomCharacter", err);
    }
  };

  // 색상 뽑기 함수
  const randomColor = async () => {
    try {
      if (userInfo.point < 1000) {
        Alert.alert("경고", "포인트가 부족합니다!", [
          { text: "확인", onPress: () => {}, style: "default" },
        ]);
      } else {
        dispatch(updatePoint({ point: -1000 }));
        dispatch(
          changeColor({
            mainCharacterIdx: mainCharacter.characterIdx
          })
        ).then((response) => {
          props.setSelectedColor(response.payload);
          props.setModalVisible3(true);
        });
      }
    } catch (err) {
      console.log("color", err);
    }
  };

  // 치장아이템 뽑기 함수
  const randomItem = async () => {
    try {
      if (userInfo.point < 1000) {
        Alert.alert("경고", "포인트가 부족합니다!", [
          { text: "확인", onPress: () => {}, style: "default" },
        ]);
      } else {
        dispatch(updatePoint({ point: -1000 }));
        dispatch(getRandomItem()).then((response) => {
          console.log(response.payload);
          props.setSelectedItem(response.payload);
          props.setModalVisible4(true);
        });
      }
    } catch (err) {
      console.log("item", err);
    }
  }

  // 동물 알 뽑기 버튼을 눌렀을 때
  if (props.selectedBtn === 1) {
    return (
      <View style={styles.marketContent}>
        <View
          style={{
            flex: 3.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.marketSource.egg}
            style={{
              resizeMode: "contain",
              height: "65%",
              width: "50%",
              marginBottom: "10%",
            }}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomItems}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>🥚 X 1</Text>
            <TouchableOpacity
              style={styles.puchaseBtn}
              onPress={() => {
                randomCharacter();
              }}
            >
              <Image source={images.gameIcon.coin} style={styles.coinIcon} />
              <Text style={styles.coinText}>1,000</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomItems}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>🥚 X 10</Text>
            <TouchableOpacity
              style={styles.puchaseBtn}
              onPress={() => {
                randomTenCharacter();
              }}
            >
              <Image source={images.gameIcon.coin} style={styles.coinIcon} />
              <Text style={styles.coinText}>9,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // 동물 색상 뽑기 버튼을 눌렀을 때
  if (props.selectedBtn === 2) {
    return (
      <View style={styles.marketContent}>
        <View
          style={{
            flex: 3.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.marketSource.color}
            style={{
              resizeMode: "contain",
              height: "120%",
              width: "100%",
              marginBottom: "10%",
            }}
          />
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomItems, { flex: 0.45 }]}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>🎨 X 1</Text>
            <TouchableOpacity
              style={styles.puchaseBtn}
              onPress={() => {
                randomColor();
              }}
            >
              <Image source={images.gameIcon.coin} style={styles.coinIcon} />
              <Text style={styles.coinText}>1,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // 치장 아이템 뽑기 버튼을 눌렀을 때
  if (props.selectedBtn === 3) {
    return (
      <View style={styles.marketContent}>
        <View
          style={{
            flex: 3.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.marketSource.item}
            style={{
              resizeMode: "contain",
              height: "120%",
              width: "100%",
              marginBottom: "10%",
            }}
          />
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomItems, { flex: 0.45 }]}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>🎁 X 1</Text>
            <TouchableOpacity
              style={styles.puchaseBtn}
              onPress={() => {
                randomItem();
              }}
            >
              <Image source={images.gameIcon.coin} style={styles.coinIcon} />
              <Text style={styles.coinText}>1,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // 치장 아이템 뽑기 버튼을 눌렀을 때
  if (props.selectedBtn === 3) {
    return (
      <View style={styles.marketContent}>
        <View
          style={{
            flex: 3.5,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.marketSource.color}
            style={{
              resizeMode: "contain",
              height: "120%",
              width: "100%",
              marginBottom: "10%",
            }}
          />
        </View>
        <View style={styles.bottom}>
          <View style={[styles.bottomItems, { flex: 0.45 }]}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>🎁 X 1</Text>
            <TouchableOpacity
              style={styles.puchaseBtn}
              onPress={() => {
                randomColor();
              }}
            >
              <Image source={images.gameIcon.coin} style={styles.coinIcon} />
              <Text style={styles.coinText}>1,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// 동물 알 1개 뽑기 모달
function OneEgg(props) {
  const type = props.selectedCharacter.characterType;

  return (
    <View style={[globalStyles.modalStyle, { backgroundColor: '#FFFDD2' }]}>
      <View style={styles.modalBox}>
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            borderRadius: 15,
            justifyContent: 'center'
          }}
        >
          <Image
            source={images.eggs[type]}
            style={{
              width: "100%",
              height: "60%",
              resizeMode: 'contain'
            }}
          />
        </View>
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {typeList[type]}알을 획득했습니다!
      </Text>
      <TouchableOpacity
        style={styles.okBtn}
        onPress={() => props.setModalVisible1(false)}
      >
        <Text style={styles.okText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

// 동물 알 10개 뽑기 모달
function TenEgg(props) {
  const characters = [];
  props.tenCharacterList.map((c, i) => {
    characters.push({
      id: i,
      imageUrl: images.eggs[c.characterType],
      atk: c.atk,
      def: c.def
    })
  })

  characters.push({ id: 11, imageUrl: null, atk: null, def: null }, 
    { id: 11, imageUrl: null, atk: null, def: null })
  // 12개로 맞추지 않아서 에러뜸 -> 임의로 2개를 null로 넣어줘야 에러가 안뜬다..

  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

  const GridWithImages = () => {
    return (
      <View
        style={{
          flex: 0.95,
          width: "95%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {arr.map((row, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              width: "95%",
              flexDirection: "row",
              marginVertical: "2%",
            }}
          >
            {row.map((item) => (
              <View
                key={item}
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "white",
                  alignItems: "center",
                  marginHorizontal: "2%",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={characters[item - 1].imageUrl}
                  style={{
                    flex: 1,
                    width: "50%",
                    resizeMode: "contain",
                  }}
                />
                <View style={{ flex: 0.5, flexDirection: "row" }}>
                  {characters[item - 1].atk ? (
                    <Text style={{ fontSize: 14 }}> atk +1 </Text>
                  ) : null}
                  {characters[item - 1].def ? (
                    <Text style={{ fontSize: 14 }}> def +1 </Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={[globalStyles.modalStyle, { backgroundColor: '#FFFDD2' }]}>
      <View style={styles.modalBox}>
        <GridWithImages />
      </View>
      <TouchableOpacity
        style={styles.okBtn}
        onPress={() => props.setModalVisible2(false)}
      >
        <Text style={styles.okText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

// 색상 뽑기 모달
function Color(props) {
  const type = props.selectedColor.characterType;
  const color = props.selectedColor.color;

  const colorList = {
    MINT: "민트",
    WHITE: "하얀",
    BASIC: "기본",
    LED: "레전드",
  };

  return (
    <View style={[globalStyles.modalStyle, { backgroundColor: '#FFFDD2' }]}>
      <View style={styles.modalBox}>
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            borderRadius: 15,
            justifyContent: "center",
          }}
        >
          <Image
            source={images.defaultCharacter[type][color]}
            style={{ width: "70%", height: "70%", resizeMode:"contain", marginLeft:"15%" }}
          />
        </View>
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {colorList[color]}색이 적용되었습니다!
      </Text>
      <TouchableOpacity
        style={styles.okBtn}
        onPress={() => props.setModalVisible3(false)}
      >
        <Text style={styles.okText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

// 아이템 뽑기 모달
function Item(props) {
  const item = props.selectedItem;

  const itemList = {
    SSAFY_CAP: '싸피모자',
    CROWN_CAP: '왕관',
    RUBY_NECKLACE: '루비 목걸이',
  };

  return (
    <View style={[globalStyles.modalStyle, { backgroundColor: '#FFFDD2' }]}>
      <View style={styles.modalBox}>
        <View
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "white",
              borderRadius: 15,
              justifyContent: "center",
            }}
          >
          <Image
            source={images.accessory[item.toLowerCase()]}
            style={{ width: "70%", resizeMode:"contain", marginLeft:"15%" }}
          />
        </View>
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {itemList[item]}
      </Text>
      <TouchableOpacity
        style={styles.okBtn}
        onPress={() => props.setModalVisible4(false)}
      >
        <Text style={styles.okText}>확인</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    flex: 1.5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnStyle: {
    flex: 1,
    height: "30%",
    marginHorizontal: "1%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#007272",
  },
  btnText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "#0E6F6F",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 2,
  },
  marketContent: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1.5,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(159, 164, 208, 0.8)",
    borderWidth: 1,
    borderColor: "rgba(126, 144, 189, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomItems: {
    flex: 1,
    height: "75%",
    flexDirection: "column",
    backgroundColor: "#BCCADE",
    marginHorizontal: "5%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(102, 111, 137, 0.8)",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  puchaseBtn: {
    flex: 0.5,
    flexDirection: "row",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00B1B1",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(157, 141, 98, 0.59)",
  },
  coinIcon: {
    resizeMode: "contain",
    width: "30%",
    height: "60%",
    marginRight: "5%",
  },
  coinText: {
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalBox: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  okBtn: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  okText: {
    height: "60%",
    width: "30%",
    backgroundColor: "#FFC700",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
  },
});

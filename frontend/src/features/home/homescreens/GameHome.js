import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Alert,
} from 'react-native';

import { SCREEN_WIDTH } from '../homecomponents/ScreenSize.js';

import GameHeader from '../homecomponents/GameHeader.js';
import home from '../../.././assets/background/home.png';
import trophy from '../../.././assets/game/icon/trophy.png';
import collection from '../../.././assets/game/button/collection.png';
import eat from '../../.././assets/game/button/eat.png';
import training from '../../.././assets/game/button/training.png';
import mission from '../../.././assets/game/button/mission.png'
import map from '../../.././assets/game/button/map.png'
import market from '../../.././assets/game/button/market.png'
import wallet from '../../.././assets/game/button/wallet.png'
import dailyChallenge from '../../.././assets/game/button/dailyChallenge.png';
import modalClose from '../../.././assets/game/button/modalClose.png';

// 상태바 겹침현상을 없애려면 react-native에서 StatusBar를 import 해줘야함

export default function GameHome({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={home} style={styles.bgImg}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ 
                        backgroundColor: 'white',
                        width: '90%',
                        height: '90%',
                        marginHorizontal: '5%',
                        marginVertical: '10%',
                    }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={modalClose} />
                        </TouchableOpacity>
                        <Text>공지사항</Text>
                    </View>
                </Modal>
                <GameHeader />
                <Season />
                <Content navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                <Bottom navigation={navigation}/>
            </ImageBackground>
            <StatusBar />

        </View>
    )
}

function Season() {

    return (
        <View style={styles.season}>
            <LinearGradient style={styles.box} colors={['rgba(142, 170, 245, 1)', 'rgba(72, 122, 255, 0.4)', 'transparent']}>
                <Image source={trophy} style={styles.trophy}/>
                <Text style={styles.seasonText}>1 시즌</Text>
            </LinearGradient>
        </View>
    )
}

function Content(props) {

    return (
        <View style={styles.content}>
            <View style={styles.sideBar}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Collection')}>
                    <Image source={collection} style={styles.buttonContent} />
                    <Text style={styles.btnText}>동물도감</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={eat} style={styles.buttonContent} />
                    <Text style={styles.btnText}>밥 주기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={training} style={styles.buttonContent} />
                    <Text style={styles.btnText}>훈련</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <Image source={require('../../.././assets/characters/default/default_4.png')} 
                    style={{ width: '100%', height: '50%', resizeMode: 'contain' }}
                />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                }}>[인동점 지점장]</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textShadowColor: 'black',
                    textShadowRadius: 2,
                    textShadowOffset: { width: 2, height: 2 },
                    elevation: 2,
                }}>5h 48m</Text>
            </View>
            <View style={styles.sideBar}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setModalVisible(true)}
                >
                    <Image source={mission} style={styles.buttonContent} />
                    <Text style={styles.btnText}>공지</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Mission')}>
                    <Image source={mission} style={styles.buttonContent} />
                    <Text style={styles.btnText}>미션</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={map} style={styles.buttonContent} />
                    <Text style={styles.btnText}>지도</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Bottom(props) {

    return (
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomBtn}>
                <Image source={wallet} style={styles.buttonContent}/>
                <Text style={styles.btnText}>지갑으로</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomCenterBtn}>
                <Image source={dailyChallenge} style={styles.challengeBtn}/>
                <Text style={styles.btnText}>일일도전</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtn} onPress={() => { props.navigation.navigate('Market') }}>
                <Image source={market} style={styles.buttonContent}/>
                <Text style={styles.btnText}>상점</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImg: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: '100%',
        resizeMode: 'cover',
    },
    season: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%',
        height: '70%',
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 10,
        alignItems: 'center',
    },
    trophy: {
        width: '20%',
        height: '70%',
        resizeMode: 'contain'
    },
    seasonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E3B75A',
        textShadowColor: '#0046FF',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textAlign: 'center',
        alignSelf: 'center',
        
    },
    content: {
        flex: 5,
        flexDirection: 'row',
    },
    main: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideBar: { 
        flex: 1,
        flexDirection: 'column',
        width: '20%',
        height: '80%',
        marginTop: '8%',
        marginStart: '2%',
        marginEnd: '2%',
        padding: '1%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgba(65, 66, 69, 0.55)',
        borderRadius: 10,
        borderColor: 'rgba(131, 131, 131, 0.55)',
        borderWidth: 3,
        width: '100%',
        height: '21%',
        margin: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    buttonContent: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    },
    bottom: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomBtn: {
        backgroundColor: '#6B6F89',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.56)',
        borderWidth: 2,
        flex: 1,
        width: '100%',
        height: '60%',
        margin: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomCenterBtn: {
        width: '100%',
        height: '70%',
        backgroundColor: 'rgba(251, 192, 40, 1)',
        borderRadius: 10,
        borderColor: 'rgba(167, 142, 78, 1)',
        borderWidth: 2,
        flex: 2,
        margin: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    challengeBtn: {
        width: '100%',
        height: '55%',
        resizeMode: 'contain',
    },
    btnText: { 
        fontWeight: 'bold', 
        color: 'white', 
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 3,
    }
})
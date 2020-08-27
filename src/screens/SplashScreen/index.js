import React from 'react';
// import React, { useEffect } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import globalStyle from '../../utils/globalStyle';
import style from './style';
import label from '../../utils/labels';

const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    //     navigation.replace('BarCode');
    // }, [])

    // Nous avons utilisé setTimeOut car avec useEffect, on ne voit pas le Flash Screen, car l'application charge instantanément.
    setTimeout(() => {
        navigation.replace('BarCode');
    }, 3000);

    return <ImageBackground source={label.FlashScreenImg} style={style.image}></ImageBackground>
}

export default SplashScreen;
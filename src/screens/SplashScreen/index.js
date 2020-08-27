import React from 'react';
// import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import globalStyle from '../../utils/globalStyle';

const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    //     navigation.replace('BarCode');
    // }, [])

    // Nous avons utilisé setTimeOut car avec useEffect, on ne voit pas le Flash Screen, car l'application charge instantanément.
    setTimeout(() => {
        navigation.replace('BarCode');
    }, 3000);

    return <View style={globalStyle.screensView}>
            <Text>Splash Screen</Text>
        </View>
}

export default SplashScreen;
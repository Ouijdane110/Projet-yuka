import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyle from '../../utils/globalStyle';

const DetailsBarCodeScreen = ({ route, navigation }) => {

    const backToScanner = () => {
        navigation.navigate('BarCode', {
            screen: 'BarCodeScreen',
        });
    }
    
    return (
        <View style={globalStyle.screensView}>
            { console.log('data : ', route.params.params.data) }
        <Text>(donné que l'on recupère après le scan)</Text>
        <Button title="Scan another product" onPress={backToScanner} />
    </View>
    )
}

export default DetailsBarCodeScreen;
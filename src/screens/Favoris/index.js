import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyle from '../../utils/globalStyle';

const FavorisScreen = () => {
    const getMyObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('favoris')
          //return jsonValue != null ? JSON.parse(jsonValue) : null
          return console.log(jsonValue)
        } catch(e) {
          console.log(e)
        }
      
        console.log('Done.')
      
      }

    return <View style={globalStyle.screensView}>
        <Text>Favoris</Text>
        <Button title='click' onPress={getMyObject}/>
    </View>
}

export default FavorisScreen;
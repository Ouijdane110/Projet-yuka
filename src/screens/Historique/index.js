import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, Button } from 'react-native';
import ListItem from '../../components/ListItem';
import globalStyle from '../../utils/globalStyle';

const HistoriqueScreen = () =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
        getMyObject();
    },[]) 
    const getMyObject = async () => {
        try {
          const value = await AsyncStorage.getItem('historique')
          if (value !== null) {
            setData(value);
            console.log('data ici', data);
          }
        } catch(e) {
          console.log(e)
        }
      }
    return <View style={{display: 'block', marginTop: 200,}}>
        <Text>Historique</Text>
        {
            data
              ? data.map((product,key)=> console.log('product', product))
              : <Text>Aucune donnée dans votre historique"</Text>
        }
    </View>
}
export default HistoriqueScreen;
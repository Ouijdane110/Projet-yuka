import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import style from './style';
 
const HistoriqueScreen = () =>{
    const [ data, setData ] = useState([]);

    useEffect(() =>{
        getMyObject();
    },[data]);
 
    const getMyObject = async () => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('historique'))
            if (value !== null) {
                setData(value);
            }
        } 
        catch(e) {
            console.log(e)
        }
    }

    return <View style={style.contentView}>
        <Text style={style.title}>Historique</Text>
        <ScrollView style={style.scrollView}>
          {
              data
              ? data.map((historique, key) => <ListItem data={historique} key={key} />)
              : <Text>Aucune donnée dans votre historique</Text>
          }
        </ScrollView>
    </View>
}

export default HistoriqueScreen;
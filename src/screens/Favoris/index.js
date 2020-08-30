import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import style from './style';
 
const FavorisScreen = () =>{
 
    const [ data, setData ] = useState([]);
    
    useEffect(() =>{
        getMyObject();
    }, [data]);
 
    const getMyObject = async () => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('favoris'))
            if (value !== null) {
                setData(value);
            }
        } 
        catch(e) {
            console.log(e)
        }
    }

    return <View style={style.contentView}>
        <Text style={style.title}>Favoris</Text>
        <ScrollView style={style.scrollView}>
          {
              data
              ? data.map((favoris, key)=> <ListItem data={favoris} key={key}/>)
              : <Text>Aucune donnée dans votre historique"</Text>
          }
        </ScrollView>
    </View>
}

export default FavorisScreen;
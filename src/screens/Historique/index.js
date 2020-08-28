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
 //await AsyncStorage.clear() 
 try {
 const value = JSON.parse(await AsyncStorage.getItem('historique'))
 if (value !== null) {
 setData(value);
 
 }
 } catch(e) {
 console.log(e)
 }
 }
 return <View style={{display: 'block', marginTop: 200,}}>
 <Text>Historique</Text>
 {
 data
 ? data.map((product,key)=> <ListItem data={product}/>)
 : <Text>Aucune donnée dans votre historique"</Text>
 }
 </View>
}
export default HistoriqueScreen;
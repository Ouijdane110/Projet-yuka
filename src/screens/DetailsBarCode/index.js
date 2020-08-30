import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, ScrollView, Image, TouchableOpacity  } from 'react-native';
import B from '../../components/Bold';
import colors from '../../utils/color';
import label from '../../utils/labels';
import Hearth from '../../components/Icon/hearth';
import style from './style';

const saveInHistorique = async (data) => {
    try{
        let historique = JSON.parse(await AsyncStorage.getItem('historique'));

        if(historique === null){
            historique = [];
        }

        historique.push(data);
        await AsyncStorage.setItem('historique', JSON.stringify(historique))
    }
    catch (e) {
        console.log('Error : ', e);
    }
}

  const saveInFavorite = async (data) => {
    try{
        let favorite = JSON.parse(await AsyncStorage.getItem('favoris'));

        if(favorite === null){
            favorite = [];
        }

        favorite.push(data);
        await AsyncStorage.setItem('favoris', JSON.stringify(favorite))
    }
    catch (e) {
        console.log('Error : ', e);
    }
  }

const DetailsBarCodeScreen = ({ route }) => {
    const data = route.params.params.data.product;
    saveInHistorique(data);

    return (
        <View style={style.contenaire}>
            <Image
                style={style.image}
                source={{uri: data.image_url}}
            />
            <View>
                <Text style={style.title}>{data.brands} - {data.product_name}</Text>
                <View style={style.headerCard}>
                    <View style={style.headerContent}>
                        <Text><B>Quantité</B></Text>
                        <Text style={style.quantity}>{data.serving_size}</Text>
                    </View>
                    <View style={style.headerContent}>
                        <Text style={style.nutriLabel}><B>Nutri-Score</B></Text>
                        <Image
                            style={style.imageNutriScore}
                            source={{uri: label.NutriScoreLabel[data.nutrition_grade_fr]}}
                        />
                    </View>
                </View>
                <View>
                    <Text><B>Produit en :</B> {data.countries}</Text>
                    <Text><B>Éxpire le :</B>
                        { 
                            data.expiration_date !== ""
                                ? ` Expire le ${data.expiration_date}`
                                : ` Information non indiquée.`
                        }
                    </Text>
                </View>
                <ScrollView style={style.scrollView}>
                    <Text style={style.scrollTitle}><B>Description :</B></Text>
                    <Text>{data.categories}</Text>
                    <Text style={style.scrollTitle}><B>Niveaux de nutriments :</B></Text>
                    <Text><B>Graisse:</B> {data.nutrient_levels.fat}</Text>
                    <Text><B>Graisses saturées:</B> {data.nutrient_levels.fat}</Text>
                    <Text><B>Sucres:</B> {data.nutrient_levels.sugars}</Text>
                    <Text><B>Sel:</B> {data.nutrient_levels.salt}</Text>
                </ScrollView>
            </View>
            <TouchableOpacity
                style={style.button}
                onPress={() => saveInFavorite(data)}
            >
                 <Hearth color={colors.pink} width={40} height={40} />
            </TouchableOpacity>
        </View>
    )
}

export default DetailsBarCodeScreen;
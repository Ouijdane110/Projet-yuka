import React,{useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, Button, ScrollView, Image, Alert } from 'react-native';
import B from '../../components/Bold';
import colors from '../../utils/color';
import label from '../../utils/labels';
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
        console.log('historique', favorite);
        await AsyncStorage.setItem('historique', JSON.stringify(favorite))
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
                    <Text style={style.scrollTitle}><B>Adapté pour :</B></Text>
                    <Text>
                        <B>Végan :</B>
                        <Image
                            style={style.imageYesNo}
                            source={{uri: label.YesOrNot[data.ingredients[0].vegan]}}
                        />
                    </Text>
                    <Text>
                        <B>Végétarien :</B>
                        <Image
                            style={style.imageYesNo}
                            source={{uri: label.YesOrNot[data.ingredients[0].vegetarian]}}
                        />
                    </Text>
                </ScrollView>
            </View>
            <Button
                title="Ajouter au favoris"
                color={colors.pink}
                onPress={saveInFavorite(data)}
            />
        </View>
    )
}

export default DetailsBarCodeScreen;
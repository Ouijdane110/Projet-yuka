import React from 'react';
import { Text, View, Button, ScrollView, Image, Alert } from 'react-native';
import B from '../../components/Bold';
import colors from '../../utils/color';
import label from '../../utils/labels';
import Hearth from '../../components/Icon/hearth'
import style from './style';

const getNutriScoreLabel = letter => {
    switch(letter){
        case 'a':
            return 'https://cdn.discordapp.com/attachments/670302891239800842/748622167440359484/A.png';
        case 'b':
            return 'https://cdn.discordapp.com/attachments/670302891239800842/748622169122275328/B.png';
        case 'c':
            return 'https://cdn.discordapp.com/attachments/670302891239800842/748622170615185619/C.png';
        case 'd':
            return 'https://cdn.discordapp.com/attachments/670302891239800842/748624216772968548/D.png';
        case 'e':
            return 'https://cdn.discordapp.com/attachments/670302891239800842/748622166563750049/E.png';
        default:
            return true;
    }
}

const DetailsBarCodeScreen = ({ route, navigation }) => {
    const data = route.params.params.data.product;
    
    const backToScanner = () => {
        navigation.navigate('BarCode', {
            screen: 'BarCodeScreen',
        });
    }

    const addToFavorite = () => {
        Alert.alert('yoyo')
        // Ouijdane fait le AsyncStorage
    }

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
                buttonStyle={style.button}
                onPress={addToFavorite}
            />
        </View>
    )
}

export default DetailsBarCodeScreen;
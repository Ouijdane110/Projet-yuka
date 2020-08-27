import React from 'react';
import { Text, View, Button, ScrollView, Image } from 'react-native';
import globalStyle from '../../utils/globalStyle';
import style from './style';

const DetailsBarCodeScreen = ({ route, navigation }) => {
    const data = route.params.params.data.product;
    
    const backToScanner = () => {
        navigation.navigate('BarCode', {
            screen: 'BarCodeScreen',
        });
    }
    
    return (
        <View style={style.contenaire}>
            <Image
                style={style.image}
                source={{uri: data.image_url}}
            />
            <View>
                <View>
                    <Text>{data.product_name}</Text>
                    <Text>{data.serving_size}</Text>
                    <Text>{data.nutrition_grade_fr}</Text>
                </View>
                <View>
                    <Text>Produit en {data.countries}</Text>
                    <Text>
                        { 
                            data.expiration_date !== ""
                                ? `Expire le ${data.expiration_date}`
                                : `Information non indiquée.`
                        }
                    </Text>
                </View>
                <ScrollView>
                    <Text>Description :</Text>
                    <Text>{data.categories}</Text>
                    <Text>Pays de vente :</Text>
                    <Text>{data.purchase_places_tags}</Text>
                </ScrollView>
            </View>

        <Button title="Scan another product" onPress={backToScanner} />
    </View>
    )
}

export default DetailsBarCodeScreen;
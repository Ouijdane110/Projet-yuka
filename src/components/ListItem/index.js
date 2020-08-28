import React from 'react';
import { Text, View, Image } from 'react-native';
import B from '../Bold';
import style from './style';

const ListItem = ({ data }) =>
    <View style={style.contenaire}>
        <Image
            style={style.image}
            source={{uri: data.image_url }}
        />
        <View style={style.textContent}>
            <Text style={style.titleItem}><B>{data.brands} - {data.product_name}</B></Text>
            <Text style={style.text}>{data.categories}</Text>
        </View>
    </View>

export default ListItem;
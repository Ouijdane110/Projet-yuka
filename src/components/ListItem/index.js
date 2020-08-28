import React from 'react';
import { Text, View, Image } from 'react-native';

const ListItem = ({ data }) =>
    <View style={{display: 'flex'}}>
        <Image
            source={{uri: data.image_url }}
        />
        <View style={{display: 'block'}}>
            <Text>{data.brands} - {data.product_name}</Text>
            <Text>{data.categories}</Text>
        </View>
    </View>

export default ListItem;
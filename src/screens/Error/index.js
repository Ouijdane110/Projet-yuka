import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import globalStyle from '../../utils/globalStyle';
import label from '../../utils/labels';
import style from './style';

const ErrorScreen = () => 
    <View style={style.contenair}>
            {/* <ImageBackground
                style={style.image}
                source={{uri: 'https://cdn.discordapp.com/attachments/670302891239800842/748539953260003338/market.png'}}>
                    <Text>{ label.Error.title }</Text>
                </ImageBackground> */}
        <Text style={style.text}>{ label.Error.title }</Text>
        <Image
            style={style.image}
            source={{uri: 'https://cdn.discordapp.com/attachments/670302891239800842/748539953260003338/market.png'}}
            />
    </View>

export default ErrorScreen;
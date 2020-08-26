import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Hearth from '../Icon/hearth';
import CodeBar from '../Icon/codebar';
import Historique from '../Icon/historique';
import styles from './styles';

const NavBar = ({ navigation }) => <View style={styles.container}>
    <Historique 
        color="#3c3c3b"
        width={40}
        height={40}
        navigation={navigation} 
    />
    <CodeBar 
        color="#3c3c3b"
        width={40}
        height={40} 
        navigation={navigation} 
    />
    <Hearth 
        color="#3c3c3b"
        width={40}
        height={40}
        navigation={navigation}
    />
</View>

export default NavBar;
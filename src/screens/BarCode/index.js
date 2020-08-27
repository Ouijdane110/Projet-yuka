import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Vibration, Alert, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import globalStyle from '../../utils/globalStyle';
import label from '../../utils/labels';

const BarCodeScreen = ({ navigation }) => {
  const [ hasPermission, setHasPermission ] = useState(null);
  const [ isBarCode ] = useState('org.gs1.EAN-13');
  const [ scanned, setScanned ] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Vibration.vibrate();

    isBarCode === type
    ? fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
        .then(res => res.json())
        .then(result => {
            result.status
              ? navigation.navigate('DetailsBarCode', {
                  screen: 'DetailsBarCodeScreen',
                  params: { data: result },
              })
              : navigation.navigate('Error', {
                screen: 'ErrorScreen',
            })
            setScanned(false);
        })
    : Alert.alert(label.BarCode.isNotBarCode);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={globalStyle.contentQRCode}>
      <Text style={globalStyle.titleBarCode}>{label.BarCode.title}</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

export default BarCodeScreen;
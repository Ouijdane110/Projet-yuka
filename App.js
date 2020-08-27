import React, { useEffect } from 'react';
import { View } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './src/utils/color';
import Historique from './src/components/Icon/historique';
import CodeBar from './src/components/Icon/codebar';
import Hearth from './src/components/Icon/hearth';
import roadMap from './src/router';

const gestionIconTab = name => {
  switch(name){
    case 'Historique':
      return <Historique color={colors.blue} width={40} height={40} />
    case 'BarCode':
      return <CodeBar color={colors.blue} width={40} height={40} />
    case 'Favoris':
      return <Hearth color={colors.blue} width={40} height={40} />
  }
}

const Tab = createBottomTabNavigator();

const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return <>
    <NavigationContainer>
      <Tab.Navigator
          tabBarOptions={{
            style: {
              height: 75,
              backgroundColor: colors.white,
            },
            tabStyle: {
              height: 75,
              marginLeft: -145,
              paddingLeft: 54,
              paddingRight: 240,
            },
          }}
      >
          { 
            roadMap.map((prop,key) => <Tab.Screen name={prop.name} component={prop.component} options={{ tabBarLabel: '', tabBarIcon: () => gestionIconTab(prop.name)}} key={key} />
            )
          }
      </Tab.Navigator>
    </NavigationContainer>
  </>
}

export default App;
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Splash from './components/Splash';
import Initial from './components/Initial';

const stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="Initial" component={Initial} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

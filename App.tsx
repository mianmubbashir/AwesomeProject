
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ScrollView
} from 'react-native';
import Header from './components/Header';
import Product from './components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
import TestScreen from './components/TestScreen';

const stack = createNativeStackNavigator();
function App(): JSX.Element {

  return (
       <NavigationContainer>
        <stack.Navigator>
          {/* <stack.Screen name='Home' component={ProductWrapper}/>
          <stack.Screen name='User' component={UserList}/> */}
          <stack.Screen  name='Test' component={TestScreen}/>
        </stack.Navigator>
       </NavigationContainer>
  );
}

export default App;

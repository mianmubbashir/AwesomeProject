import React from 'react';
import {
  Image,
  View,
  Button,
  ScrollView
} from 'react-native';
import Header from './Header';
import Product from './Product';
import { useNavigation } from '@react-navigation/native';

function ProductWrapper(): JSX.Element {

    const navigation : any = useNavigation();
    const navigateToTabs = () => {
     navigation.navigate('User');
   };

   const test = () => {
    navigation.navigate('User');
  };
 

  const Products = [
    {
      id: 1,
      name: 'samsung mobile',
      price: 52000,
      image: 'https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw='
    },
    {
      id: 2,
      name: 'iphone mobile',
      price: 52000,
      image: 'https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw='
    },
    {
      id: 3,
      name: 'xiomi mobile',
      price: 52000,
      image: 'https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw='
    },
    {
      id: 4,
      name: 'realme mobile',
      price: 52000,
      image: 'https://media.istockphoto.com/id/1161116588/photo/mobile-phone-top-view-with-white-screen.jpg?s=612x612&w=0&k=20&c=6nGTbnTvQUiq2XXSYuT411pC-5B1SUjhpLhE3eGrNIw='
    }
  ]
  return (
        <View>
          <Button title={'Go To User Screen'} onPress={navigateToTabs}/>  
          <Button title={'Go To test Screen'} onPress={test}/>  
         <Header />
         <ScrollView style={{marginBottom: 150}}>
         {
          Products.map((element)=> <Product key={element.id}  element={element}/> )
         }
         </ScrollView>
        </View>
  );
}

export default ProductWrapper;


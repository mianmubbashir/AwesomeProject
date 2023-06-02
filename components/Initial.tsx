import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface GetStartProps {
  navigation: NavigationScreenProp<any, any>;
}

const GetStart: React.FC<GetStartProps> = ({ navigation }): JSX.Element => {

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.Image}
          resizeMode="contain"
          source={require('../assets/og.png')}
        />
      </View>
      <View style={{ width: 250 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0E8388',
            height: 40,
            marginLeft: 130,
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  Image: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
  },

  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 90,
  },

  homeText2: {
    fontWeight: '600',
    paddingTop: 30,
  },
});

export default GetStart;

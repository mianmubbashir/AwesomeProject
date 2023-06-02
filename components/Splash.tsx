import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';

interface GetStartProps {
  navigation: NavigationScreenProp<any, any>;
}

const GetStart: React.FC<GetStartProps> = ({ navigation }): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Initial');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#006EE9' }}>
          TODOs
        </Text>
        <Text
          style={[
            styles.homeText2,
            {
              fontSize: 25
            },
          ]}
        >
          Manage Your Todos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeImage: {
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

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useSelector} from 'react-redux';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const [cartItems, setCartItems] = useState<number>(0);
  const cartData = useSelector((state: any) => state.reducer);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          marginTop: 40,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        {cartItems}
      </Text>
    </View>
  );
};

export default Header;


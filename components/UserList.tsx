import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './redux/action';

interface HeaderProps {}

const UserList: React.FC<HeaderProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.reducer);
  // console.warn(users);

  useEffect(() => {
    dispatch(getUserList(users));
  }, []);

  return (
    <View>
      {users.length
        ? users.map((item: any) => (<Text key={item.id}>{item.firstName}</Text>))
        : null}
    </View>
  );
};

export default UserList;

import React, { useState } from 'react';
import { Text, TextInput, Button, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './redux/action';

interface HeaderProps {}

const Home: React.FC<HeaderProps> = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>('');
  const todos = useSelector((state: any) => state.reducer);
  
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleDeleteTodo = (item: string) => {
    dispatch(removeTodo(item));
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#FAF8F1' }}>
      <TextInput
        style={{
          borderColor: '#0E8388',
          borderWidth: 1,
          padding: 15,
          marginBottom: 10,
          fontSize: 25,
        }}
        placeholder="Enter todo"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#FFDCA9',
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 25 }}>{item}</Text>
            <Button title="DELETE" onPress={() => handleDeleteTodo(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

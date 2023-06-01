import React, { useState } from 'react';
import {View, Text, TextInput, Button, NativeModules} from 'react-native';

function TestScreen() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(undefined)
  const [email, setEmail] = useState('')

  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const saveData = async () => {
    
//     !name ? setNameError(true) : setNameError(false)

//     !age ? setAgeError(true) : setAgeError(false)

//     !email ? setEmailError(true) : setEmailError(false)
 
//     !name || !age || !email ? false : null

//   console.warn('stop');
  
    const url = 'http://192.168.100.27:3000/Users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        "content-Type": "application/json"
    },
      body: JSON.stringify({name, age, email}),
      
    });
    console.warn(result);

  };
  return (
    <View>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          padding: 15,
          margin: 20,
        }}
        placeholder="Enter Name"
        value={name}
        onChangeText={(text : any) => setName(text)}
        />
        {/* {
            nameError 
            ? <Text style={{color: 'red', marginHorizontal: 120}}>PLease Enter Valid Name</Text> : null
        } */}
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          padding: 15,
          margin: 20,
        }}
        placeholder="Enter Age"
        value={age}
        onChangeText={(text: any) => setAge(text)}
      />
      {/* {
            ageError 
            ? <Text style={{color: 'red', marginHorizontal: 120}}>PLease Enter Valid Age</Text> : null
        } */}
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          padding: 15,
          margin: 20,
        }}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text : any) => setEmail(text)}
      />
      {/* {
            emailError 
            ? <Text style={{color: 'red', marginHorizontal: 120}}>PLease Enter Valid Email</Text> : null
        } */}

      <Button title="Submit" onPress={saveData}/>
    </View>
  );
}

export default TestScreen;

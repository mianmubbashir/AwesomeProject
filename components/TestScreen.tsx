// import React, {useState, useEffect} from 'react';
// import {View, Text, TextInput, Button, NativeModules} from 'react-native';


// interface UserData {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }
  
// function TestScreen() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState();
//   const [email, setEmail] = useState('');
//   const [data, setData] = useState([]);

//   const [nameError, setNameError] = useState(false);
//   const [ageError, setAgeError] = useState(false);
//   const [emailError, setEmailError] = useState(false);

//   const saveData = async () => {
//     !name ? setNameError(true) : setNameError(false);

//     !age ? setAgeError(true) : setAgeError(false);

//     !email ? setEmailError(true) : setEmailError(false);

//     !name || !age || !email ? false : null;

//     console.warn('stop');

//     const url = 'http://localhost:3000/users';
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'content-Type': 'application/json',
//       },
//       body: JSON.stringify({name, age, email}),
//     });
//     console.log('helllllllo', result);
//   };

//   const getData = async () => {
//     const url = 'http://localhost:3000/users';
//     const result = await fetch(url);
//     const jsonData = await result.json();

//     if (jsonData) {
//       setData(jsonData);
//     }
//   };

//   const deleteData = async (id : any) => {
//     const url = 'http://localhost:3000/users';
//     let result = await fetch(`${url}/${id}`,{
//         method: "delete"
//     });
//     result = await result.json()
//     if(result){
//         console.warn('user deleted');
//         getData();
//     }

//   }


//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <View>
//       <TextInput
//         style={{
//           borderColor: 'skyblue',
//           borderWidth: 1,
//           padding: 15,
//           margin: 20,
//         }}
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={(text: any) => setName(text)}
//       />
//       {nameError ? (
//         <Text style={{color: 'red', marginHorizontal: 120}}>
//           PLease Enter Valid Name
//         </Text>
//       ) : null}
//       <TextInput
//         style={{
//           borderColor: 'skyblue',
//           borderWidth: 1,
//           padding: 15,
//           margin: 20,
//         }}
//         placeholder="Enter Age"
//         value={age}
//         onChangeText={(text: any) => setAge(text)}
//       />
//       {ageError ? (
//         <Text style={{color: 'red', marginHorizontal: 120}}>
//           PLease Enter Valid Age
//         </Text>
//       ) : null}
//       <TextInput
//         style={{
//           borderColor: 'skyblue',
//           borderWidth: 1,
//           padding: 15,
//           margin: 20,
//         }}
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={(text: any) => setEmail(text)}
//       />
//       {emailError ? (
//         <Text style={{color: 'red', marginHorizontal: 120}}>
//           PLease Enter Valid Email
//         </Text>
//       ) : null}

//       <Button title="Submit" onPress={() => saveData()} />
//       <View>
//         {data.length
//           ? data.map(item => (
//               <View style={{flexDirection:'row', margin: 10,  }} key={item.id}>
//                 <Text >{item.name} </Text>
//                 <Text>{item.age}</Text>
//                 <Text>{item.email}</Text>
//                 <Button title="Delete" onPress={() => deleteData(item.id)} />
//               </View>
//             ))
//           : null}
//       </View>
//     </View>
//   );
// }

// export default TestScreen;

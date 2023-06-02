// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import { useDispatch, useSelector} from 'react-redux';
// import { addTodo, removeTodo } from './redux/action';

// interface ProductProps {
//   element: {
//     name: string;
//     price: number;
//     image: string;
//   };
// }

// const Product: React.FC<ProductProps> = ({ element }: ProductProps): JSX.Element => {
//     const item = element.name;
    
//   const [isAdded, setIsAdded] = useState(false);
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: any) => state.reducer);

//   const handleAddToCart = (item: any) => {
//     dispatch(addTodo(item));
//   };

//   const handleRemoveFromCart = (item: any) => {
//      dispatch(removeTodo(item.name))
//   }


// useEffect(()=>{
//      let result = cartItems.filter((element: any)=>{
//         return element.name === item
//      });
//      if(result.length){
//         setIsAdded(true)
//      }else{
//         setIsAdded(false)
//      }
// },[cartItems])

//   return (
//     <View style={{ alignItems: 'center', padding: 15 }}>
//       <Text style={{ fontSize: 24 }}>{element.name}</Text>
//       <Text style={{ fontSize: 24 }}>{element.price}</Text>
//       {isAdded? 
//         <Button title="Remove From Cart" onPress={() => handleRemoveFromCart(element)} />
//        : 
//         <Button title="Add To Cart" onPress={() => handleAddToCart(element)} />
//       }
//     </View>
//   );
// };

// export default Product;

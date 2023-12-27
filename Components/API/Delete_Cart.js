import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'
import Get_Cart from './Get_Cart';

export default function Delete_Cart(Auth, Product_id, Size) {
    const {User, Localhost, BagData, setBagData}= Auth;

    // console.log(User);
  
 axios.post(`${Localhost}delete_cart.php`,
 {
    "user_id": User.id,
    "product_id": Product_id,
    "size": Size,
    
 })
 .then((response) =>{
    console.log(response.data);
    Get_Cart(Auth);
 })
.catch((err) => console.log(err))
}
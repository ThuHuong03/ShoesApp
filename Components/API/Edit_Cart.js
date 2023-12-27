import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'
import Get_Cart from './Get_Cart';

export default function Edit_Cart(Auth, Product_id, Size, Quantity) {
    const {User, Localhost, BagData, setBagData}= Auth;

    // console.log(User);
  
 axios.post(`${Localhost}change_quantity_cart.php`,
 {
    "user_id": User.id,
    "product_id": Product_id,
    "size": Size,
    "quantity": Quantity
 })
 .then((response) =>{
    console.log(response.data);
    Get_Cart(Auth);
 })
.catch((err) => console.log(err))
}
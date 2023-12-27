import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'
import Get_Cart from './Get_Cart';

export default function Delete_All_Cart(Auth) {
    const {User, Localhost, BagData, setBagData, setTotalPrice}= Auth;

    // console.log(User);
  
 axios.post(`${Localhost}delete_all_cart.php`,
 {
    "user_id": User.id
    
    
 })
 .then((response) =>{
    console.log(response.data);
    setBagData([]);
    setTotalPrice(0);
 })
.catch((err) => console.log(err))
}
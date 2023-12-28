import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'

import Get_Favor from './Get_Favor';

export default function Delete_Favor(Auth, Product_id) {
    const {User, Localhost, BagData, setBagData}= Auth;

    // console.log(User);
  
 axios.post(`${Localhost}delete_favor.php`,
 {
    "user_id": User.id,
    "product_id": Product_id

    
 })
 .then((response) =>{
    console.log(response.data);
    Get_Favor(Auth);
 })
.catch((err) => console.log(err))
}
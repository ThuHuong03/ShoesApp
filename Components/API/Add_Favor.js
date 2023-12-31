import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'
import Get_Favor from './Get_Favor';

export default function Add_Favor(Auth, Product_id) {
    const {User, Localhost, BagData, setBagData}= Auth;

 axios.post(`${Localhost}add_favor.php`,
 {
    "user_id": User.id,
    "product_id": Product_id
   
 })
 .then((response) =>{
    Alert.alert("Congratulations", "You have successfully added product into your Favorite List!");
    Get_Favor(Auth);
 })
.catch((err) => console.log(err))
}
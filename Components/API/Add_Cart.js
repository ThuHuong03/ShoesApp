import { View, Text, Alert } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function Add_Cart(Auth, Product_id, Size, Quantity) {
    const {User, Localhost, BagData, setBagData}= Auth;

    // console.log(User);
    // console.log(User.id);
 axios.post(`${Localhost}add_cart.php`,
 {
    "user_id": User.id,
    "product_id": Product_id,
    "size": Size,
    "quantity": Quantity
 })
 .then((response) =>{
    Alert.alert("Congratulations", "You have successfully added product into your Bag")
 })
.catch((err) => console.log(err))
}
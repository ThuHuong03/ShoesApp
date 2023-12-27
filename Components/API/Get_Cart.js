import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

export default async function Get_Cart(Auth) {
   const { User, Localhost, BagData, setBagData,  setTotalPrice } = Auth;
   let totalprice = 0;
 
   try {
     const response = await axios.get(`${Localhost}get_cart.php?user_id=${User.id}`);
     if(typeof(response.data)== "string")
     {
      setBagData([]);
      return;
     }
     setBagData(response.data);
 
     const promises = response.data.map(async (Bag) => {
       const url = `${Localhost}product_detail.php?id=${Bag.product_id}`;
       try {
         const res = await axios.get(url);
         totalprice += res.data[0].price * Bag.quantity;
         
       } catch (err) {
         console.log(err, url);
       }
     });
 
     await Promise.all(promises);
     setTotalPrice(totalprice);
   } catch (err) {
     console.log(err);
   }
 }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function Get_Orders(Auth) {
    const { User, Localhost, setOrders, Token } = Auth;
    axios
      .post(`${Localhost}order_history.php`, {
        token: Token,
      })
      .then((response) => {
        if (typeof response.data === "string") setOrders([]);
        else setOrders(response.data);
      })
      .catch((error) => console.log(error, Token));
  
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import axios from 'axios'
import { MyContext } from '../src/MyContext'

export default function Get_Product_byType({Type}) {
    const {Localhost}= useContext(MyContext);
    axios.get(`${Localhost}/product_by_type.php?id_type${Type.id}=&page=1`)
    .then((response) =>{
         console.log(response.data);
    })
    .catch((error) =>{
        console.log(error);
    })

}

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function Get_Favor(Auth) {
    const {setFavoriteData, Localhost, User}= Auth;

    axios.get(`${Localhost}get_favor.php?user_id=${User.id}`)
    .then((response) => {
        if(typeof response.data === 'string')
            setFavoriteData([]);
        else 
        setFavoriteData(response.data);
    })
    .catch((error) => {

            console.log(error);
    })
  
}
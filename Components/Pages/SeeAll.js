import { View, Text } from 'react-native'
import React from 'react'
import List from './List'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function SeeAll() { 
  const route= useRoute();
  navigation= useNavigation();
  const {Type}= route.params;
  // console.log('See', Type);
 return(
  <List Type={Type}/>
 )
  
    

}
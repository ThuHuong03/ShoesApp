import { View, Text } from 'react-native'
import React from 'react'
import List from './List'
import { useRoute } from '@react-navigation/native'

export default function SeeAll() { 
  const route= useRoute();
  const {Title}= route.params;
  
    return (
   <List Title={Title}/>
    
  )
}
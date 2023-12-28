import { View, Text } from 'react-native'
import React from 'react'
import List from './List'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function SeeAll() { 
  const route= useRoute();
  navigation= useNavigation();
  const {Type}= route.params;
  // console.log('See', Type);
  if(Type.id ==1) 
  {
    navigation.navigate('CHUCK TAYLOR')
  }
  else if(Type.id ==2)
  {
    navigation.navigate('CHUCK 70')
  }
  else if(Type.id ==3)
  {
    navigation.navigate('RUN HIKE')
  }
  else if(Type.id ==4)
  {
    navigation.navigate('ONE STAR')
  }
  
  
    

}
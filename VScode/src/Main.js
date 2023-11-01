import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home';
import SeeAll from '../Pages/SeeAll';

const Stack= createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SeeAll' component={SeeAll}/>

    </Stack.Navigator>
  )
}
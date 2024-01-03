import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Pages/Home';
import SeeAll from '../Pages/SeeAll';
import Item from '../Pages/Item';
import Search from '../Pages/Search';
import CHUCK_70 from '../Pages/CHUCK_70';
import CHUCK_TAYLOR from '../Pages/CHUCK_TAYLOR';
import ONE_STAR from '../Pages/ONE_STAR';
import RUN_HIKE from '../Pages/RUN_HIKE';

const Stack= createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='SeeAll' component={SeeAll}/>
        <Stack.Screen name='Item' component={Item}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name="CHUCK TAYLOR" component={CHUCK_TAYLOR} />
      <Stack.Screen name="CHUCK 70" component={CHUCK_70} />
      <Stack.Screen name="ONE STAR" component={ONE_STAR} />
      <Stack.Screen name="RUN HIKE" component={RUN_HIKE} />
     
        
    </Stack.Navigator>
  )
}
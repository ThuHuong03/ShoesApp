import 'react-native-gesture-handler';
import Nav from './Components/src/nav';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { AuthProvider } from './Components/src/MyContext';

import React from 'react';
import Spalsh from './Components/Pages/Spalsh';
const Stack= createNativeStackNavigator();




export default function App() {


  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name ='Splash' component={Spalsh} />
          <Stack.Screen name= 'MainScreen' component={Nav} />
        </Stack.Navigator>
      </NavigationContainer>
       
   </AuthProvider>
  

  );
}




import 'react-native-gesture-handler';
import Nav from './Components/src/nav';

import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { AuthProvider } from './Components/src/MyContext';
import Cart from './Components/Pages/Bag';



const App= ()=> {
  return (
    <AuthProvider>
        <Nav/>
   </AuthProvider>

  );
}



export default App;
import 'react-native-gesture-handler';
import Nav from './VScode/src/nav';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { AuthProvider } from './VScode/src/MyContext';




const App= ()=> {
  return (
    <AuthProvider>
        <Nav/>
   </AuthProvider>
  );
}



export default App;
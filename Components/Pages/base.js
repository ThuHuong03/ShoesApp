import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import Home from '../assets/home.svg';
import Menu from '../assets/Menu.svg';
import Search from '../assets/Search.svg';
import Bag from '../assets/Bag.svg';
import User from '../assets/User.svg';



const base = () => (
  <SafeAreaView style={styles.container}>
    
      
      
        <View style={styles.Menubar}>
        
        <View style={styles.subMenu}>
            <Home   width={30} height={30} ></Home>
        </View>

          <View style={styles.subMenu}>
          <Search width={30} height={30}/>
          <Bag width={30} height={30}/>
          <User width={30} height={30} />
          <Menu width={30} height={30} />
        </View>
      </View>

      
      
      
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop:30,

    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Menubar:{
    
     
      height:'10%',
      width:'100%',
      flexDirection:'row',
      padding:25,
      paddingTop:30,
      flex:2

     
  },
  subMenu:{

    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  scroll_screen:{
    backgroundColor:'white',
    height:'90%',
    width:'100%'
    

  },
  icon:{
    width:30,
    height:30,
    justifyContent:'flex-end'
  }
});
export default base;
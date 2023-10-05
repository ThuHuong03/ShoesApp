import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
 import Home from '../assets/home.svg';
import Menu from '../assets/Menu.svg';
import Search from '../assets/Search.svg';
import Bag from '../assets/Bag.svg';
import User from '../assets/User.svg';



const Menu_bar = () => (
  
  
      
      
        <View style={{ flexDirection: 'row',   flex: 2}}>
        
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

     
      
      
  
  
);

const styles = StyleSheet.create({
 
  
  subMenu:{

    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
 
  icon:{
    width:30,
    height:30,
    justifyContent:'flex-end'
  }
});
export default Menu_bar;
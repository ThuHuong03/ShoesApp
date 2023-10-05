import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import Home from './VScode/assets/home.svg';
import Menu from './VScode/assets/Menu.svg';
import Search from './VScode/assets/Search.svg';
import Bag from './VScode/assets/Bag.svg';
import User from './VScode/assets/User.svg';



const Home = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./VScode/assets/background.png')} resizeMode="cover" style={styles.image}>
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

      <ScrollView  style={styles.scroll_screen}>

      </ScrollView>
      
      
    </ImageBackground>
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
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  icon:{
    width:30,
    height:30,
    justifyContent:'flex-end'
  }
});
export default Home;
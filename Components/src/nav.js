import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Pages/Home';

import User_white from '../assets/User_white.svg';
import Favorite from '../assets/Favorite_fill.svg';
import Order from '../assets/Order.svg';
import Bag_white from '../assets/Bag_white.svg';
import Help_icon from '../assets/help.svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';
import CHUCK_TAYLOR from '../Pages/CHUCK_TAYLOR';
import CHUCK_70 from '../Pages/CHUCK_70';
import ONE_STAR from '../Pages/ONE_STAR';
import RUN_HIKE from '../Pages/RUN_HIKE';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bag from '../Pages/Bag';
import {  MyContext } from './MyContext';
import Main from './Main';
import axios from 'axios';

const Stack= createNativeStackNavigator();





 
  


  function Profile(){

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

 
  function Oder(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Oder Screen</Text>
      </View>
    );
  }
  function Favorites(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites Screen</Text>
      </View>
    );
  }
 function Help(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Help Screen</Text>
    </View>
  );
 }
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    
    screenOptions={{
      headerShown : false,
      drawerPosition: 'right',
      drawerActiveTintColor: '#9FF8EF',
      drawerInactiveTintColor: 'white',
      drawerActiveBackgroundColor:'#232832',
      drawerInactiveBackgroundColor:'#232832',
      drawerStyle:{
        backgroundColor: '#232832',
        
      }
    }}
    >
      
      <Drawer.Screen name="Main" component={Main} options={{drawerLabel: 'New and Feartures'}}  />
      <Drawer.Screen name="CHUCK TAYLOR" component={CHUCK_TAYLOR} />
      <Drawer.Screen name="CHUCK 70" component={CHUCK_70} />
      <Drawer.Screen name="ONE STAR" component={ONE_STAR} />
      <Drawer.Screen name="RUN HIKE" component={RUN_HIKE} />
      <Drawer.Screen name="Profile" component={Profile} 
      options={{
        drawerIcon: ()=> (<User_white  style={{ with: 30, height: 30}}/>),
            
      }}
      />
      <Drawer.Screen name="Bag" component={Bag} 
      options={{drawerIcon: ()=> (<Bag_white  style={{ with: 30, height: 30}}/>)}}/>
      <Drawer.Screen name="Oder" component={Oder} 
      options={{drawerIcon: ()=> (<Order  style={{ with: 30, height: 30}}/>)}}/>
      <Drawer.Screen name="Favorites" component={Favorites} 
      options={{drawerIcon: ()=> (<Favorite  style={{ with: 30, height: 30}}/>)}}/>
      <Drawer.Screen name="Help" component={Help} 
      options={{drawerIcon: ()=> (<Help_icon  style={{ with: 30, height: 30}}/>)}}/>

    </Drawer.Navigator>
  );
}

const Nav= ()=> {
  const Auth = useContext(MyContext)
  const {setHomeData, setType} = Auth

  function conmponentDidMount() {
    axios.get('http://192.168.1.4/API/')
    .then((response) =>{
      // console.log(response.data)
      setHomeData(response.data.product);
      setType(response.data.type);

    })
    .catch((error) => console.log(error))

    
  }
 
  useEffect(()=>{
    

  conmponentDidMount();

},[]);

  

    
  return (
    <NavigationContainer >
      { !Auth.Auth?(
    <Stack.Navigator initialRouteName='List'
    screenOptions={
      {headerShown: false}
    }
    >
      
    <Stack.Screen name="Signin" component={Signin}/>
    <Stack.Screen name="Signup" component={Signup}/>
 
    </Stack.Navigator>)
    :
    (
        <MyDrawer/>
    )
      }
      
    </NavigationContainer>
    

    

    
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:30,

    flex: 1,
  },
  image: {
    flex:1,
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
  
  scroll_screen:{
    // backgroundColor:'white',
    height:'90%',
    width:'100%',
    
    

  },
  
  
  
});
export default Nav;
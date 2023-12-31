import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Pages/Home';

import User_white from '../assets/User_white.svg';
import Favorite from '../assets/Favorite_fill.svg';
import Ordersvg from '../assets/Order.svg';
import Bag_white from '../assets/Bag_white.svg';
import Help_icon from '../assets/help.svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bag from '../Pages/Bag';
import Profile from '../Pages/Profile';
import Order from '../Pages/Order';
import {  MyContext } from './MyContext';
import Main from './Main';
import axios from 'axios';
import EditProfile from '../Pages/EditProfile';
import CheckOut from '../Pages/CheckOut';

import Item from '../Pages/Item';
import Help from '../Pages/Help';
import Favorites from '../Pages/Favorite';
import Order_Details from '../Pages/Order_Details';

const Stack= createNativeStackNavigator();





 
  

function MyProfile(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Profile} name='Profile'/>
      <Stack.Screen component={EditProfile} name='EditProfile'/>
    </Stack.Navigator>
  )
}
function MyBag (){
return(
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Bag'>
    <Stack.Screen component={Bag} name='Bag' />
    <Stack.Screen component={CheckOut} name='CheckOut'/>
    
    
  </Stack.Navigator>
)
  
}

function MyOrder (){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Order'>
    <Stack.Screen component={Order} name='Order'/>
    <Stack.Screen component={Order_Details} name='Order Detail'/>
  </Stack.Navigator>
  )
  
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
      <Drawer.Screen name="MyProfile" component={MyProfile} 
      options={{
        drawerIcon: ()=> (<User_white  style={{ with: 30, height: 30}}/>),
        drawerLabel: 'Profile'
      }}
      />
      <Drawer.Screen name="MyBag" component={MyBag} 
      options={{
        drawerIcon: ()=> (<Bag_white  style={{ with: 30, height: 30}}/>),
        drawerLabel:"Bag"
        }}/>
      <Drawer.Screen name="MyOder" component={MyOrder} 
      options={{drawerIcon: ()=> (<Ordersvg  style={{ with: 30, height: 30}}/>),
      drawerLabel:"My Order"
      }}/>

      <Drawer.Screen name="Favorites" component={Favorites} 
      options={{drawerIcon: ()=> (<Favorite  style={{ with: 30, height: 30}}/>)}}/>
      <Drawer.Screen name="Help" component={Help} 
      options={{drawerIcon: ()=> (<Help_icon  style={{ with: 30, height: 30}}/>)}}/>

    </Drawer.Navigator>
  );
}

const Nav= ()=> {
  const Auth = useContext(MyContext)
  const {setHomeData, setType, setBagData} = Auth

  function GetHomeData() {
    axios.get(Auth.Localhost)
    .then((response) =>{
      // console.log(response.data)
      setHomeData(response.data.product);
      setType(response.data.type);
      // setBagData(response.data.product);
    })
    .catch((error) => console.log(error))

    
  }
 
  useEffect(()=>{
    

  GetHomeData();

},[]);

  

    
  return (
    
       !Auth.Auth?(
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
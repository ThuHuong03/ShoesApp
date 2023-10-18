import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './VScode/assets/Menu.svg';
import Home from './VScode/Pages/Home';
import User_white from './VScode/assets/User_white.svg';
import Favorite from './VScode/assets/Favorite_fill.svg';
import Order from './VScode/assets/Order.svg';
import Bag_white from './VScode/assets/Bag_white.svg';
import Help_icon from './VScode/assets/help.svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signin from './VScode/Pages/Signin';
import Signup from './VScode/Pages/Signup';
import List from './VScode/Pages/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu_bar from './VScode/src/Menu_bar';

const Stack= createNativeStackNavigator();

function CHUCK_TAYLOR() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chuck_Taylor Screen</Text>
      <Menu_bar/>
    </View>
  );
}

function CHUCK_70(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>chuck_70 Screen</Text>
    </View>
  );
}

 function ONE_STAR(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>One_Star Screen</Text>
    </View>
  );
 }
  
 function RUN_HIKE(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Run_Hike Screen</Text>
    </View>
  );
 }

  function Profile(){

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

  function Bag (){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>bag Screen</Text>
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
      
      <Drawer.Screen name="New & Featured " component={Home}  />
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

const App= ()=> {
  return (
    <NavigationContainer >
      
    <Stack.Navigator initialRouteName='List'
    screenOptions={
      {headerShown: false}
    }
    >
      <Stack.Screen name="List" component={List}/>
    <Stack.Screen name="Signin" component={Signin}/>
    <Stack.Screen name="Signup" component={Signup}/>
    <Stack.Screen name="Main" component={MyDrawer}/>
    </Stack.Navigator>
      
      
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
export default App;
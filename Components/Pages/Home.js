import React, { useContext, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import {item_menu} from '../src/data.js'
import Menu_bar from '../src/Menu_bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { MyContext } from '../src/MyContext.js';
import { RenderItem } from '../src/Render.js';




export default function Home  () {
  const navigation = useNavigation();
  const Auth= useContext(MyContext);
  const {HomeData, Type}= Auth;
  const ToggleSeeAll= (item)=>{
    navigation.navigate('SeeAll',{Type:item.type })
    // console.log('See all', item);
   
  }

  
  

  return(
  <SafeAreaView 
  
  style={styles.container}>
    <ImageBackground style={styles.background}
    
   source= { require('../assets/background.png')}
   resizeMode="cover">
      <View style={styles.Menubar}>
        
        <Menu_bar/>
      </View>
      <View style={styles.scroll_screen}>
      
      {
        Type.map((type)=>{
         
          return (
          <View>
          <Text style={styles.Title} key={type.id}> {type.name}</Text>

          <FlatList
              // data={productsContext.Products.filter((item) => item.rating.rate >= 4)}
              data={HomeData.filter((item) => item.idType == type.id)}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({item})=>
                
                <RenderItem item={item}    key={item.id}/>
              
              }
              
            />

          <TouchableOpacity onPress={ ()=>  ToggleSeeAll({type})   } ><Text style={styles.see_all}> See all</Text></TouchableOpacity>
            
            
          </View>
          )
        })
      }

    
    
      </View>
    </ImageBackground>
    
  </SafeAreaView>
)};

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
    
     
      height:'8%',
      width:'100%',
      flexDirection:'row',
      padding:25,
      paddingTop:20,
      flex:2

     
  },
  background:{
    flex: 1,
    justifyContent  :'center'
  },
  
  scroll_screen:{
    // backgroundColor:'white',
    height:'90%',
    width:'100%',
    
    

  },
  item:{
    flexDirection:'column',
  
   // backgroundColor:'white',
   margin: 25,
   
},
Title:{
 color: '#9FF8EF',
 fontSize: 22,
 fontWeight: 'bold',
 textAlign: 'left',
 textTransform:'uppercase'
},
name:{
 fontSize:15,
 width:150,
 color:'white',
 fontWeight:"800",
 textAlign:'center',
 textTransform:'uppercase'
},
price:{

 fontSize:13,
 width:150,
 color:'white',
 // fontWeight:"normal",
 textAlign:'center',
 textTransform:'uppercase'
},
pic:{
 width: 150,
 height:150,
 alignItems:'center',



 

},
see_all:{
 color: '#9FF8EF',
 fontSize: 12,
 fontWeight: 'bold',
 textAlign: 'right',
 textTransform:'uppercase'
},
  
});

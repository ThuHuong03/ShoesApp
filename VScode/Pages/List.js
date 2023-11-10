import { View, Text, SafeAreaView, StyleSheet, ImageBackground,Image, FlatList , Dimensions} from 'react-native'
import React from 'react'
import {Data} from '../src/data'
import Menu_bar from '../src/Menu_bar'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function List({Title}) {
  navigation= useNavigation();
  const ClickItem = (item) =>{
    navigation.navigate('Item', {ID: item.id})
   
  } 
  const List_Data = Data.filter(data => data.title== Title);

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.ImageBackground} source={require('../assets/background.png')}>
            <View style={styles.Menubar}>
            <Menu_bar/>
            </View>
           
            <View style={styles.scroll_screen}>
                <View>
                    <Text style={styles.Title}>{Title}</Text>
               </View>
                <FlatList  
                data={List_Data}
                keyExtractor={item=> item.id}
                numColumns={2}
                renderItem={({item})=>
                  
                  
                    <TouchableOpacity onPress={() =>ClickItem(item)}>
                  <View style={styles.listItem}>
                  <Image source={item.image[0]}  style={styles.pic}  ></Image>
                  <Text  style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text> 
               
                </View>
                  </TouchableOpacity>
              
                 }
                
                />


               
                </View>
        </ImageBackground>

    </SafeAreaView>
  )
}

const styles= StyleSheet.create({

    container:{
        flex: 1,
        marginTop: 30,
    },
    ImageBackground:{
      flex: 1,
      justifyContent  :'center',
      alignItems: 'center'
    },
    
    Menubar:{
    
     
        height:'8%',
        width:'100%',
        flexDirection:'row',
        padding:25,
        paddingTop:20,
        flex:2
  
       
    },
    scroll_screen:{
        // backgroundColor:'white',
        height:'90%',
        width:'100%',
        
        
    
      },
     
        listItem: {
         padding: 10,
         paddingBottom: 10,
          width: Dimensions.get('window').width / 2 - 50,
          margin:15,
         alignContent: 'center',
         alignItems: 'center',

          
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
        width: 200,
        height:200,
        alignItems:'center',},

      Title:{
          color: '#9FF8EF',
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'left',
          marginLeft: 25,
          textTransform:'uppercase'
         },

       
       
       
})
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Data } from './data';
import { useNavigation } from '@react-navigation/native';

export default function Might_like() {

  navigation= useNavigation();
  const ClickItem = (item) =>{
    navigation.navigate('Item', {ID: item.id})
   
  } 
    const RCM_Data = [];
    const getRandomItem = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      };
    RCM_Data.push(getRandomItem(Data));
    RCM_Data.push(getRandomItem(Data));

  return (
    <View>
      <Text style={styles.Title}> you might also like:</Text>
      <FlatList  
      horizontal
                data={RCM_Data}
                keyExtractor={item=> item.id}
                
                renderItem={({item})=>
                  
                  
                    <TouchableOpacity onPress={() =>ClickItem(item)}>
                  <View style={styles.listItem}>
                  <Image source={item.image[0]}  style={styles.pic}  ></Image>
                  <Text  style={styles.name}>{item.name}</Text>
                  
               
                </View>
                  </TouchableOpacity>
              
                 }
                
                />
    </View>
  )
}

const styles = StyleSheet.create({
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
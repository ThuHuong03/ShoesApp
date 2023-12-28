
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions, useColorScheme } from 'react-native'
import React, { useContext } from 'react'
import { Data } from './data';
import { useNavigation } from '@react-navigation/native';
import { MyContext } from './MyContext';
import { RenderItem } from './Render';

export default function Might_like({Product}) {

  const Auth= useContext(MyContext);
  const {HomeData}= Auth;
  navigation= useNavigation();
  const ClickItem = (item) =>{
    navigation.navigate('Item', {ID: item.id})
   
  } 
    const RCM_Data = [];
    const getRandomItem = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      };
    RCM_Data.push(getRandomItem(HomeData));
    RCM_Data.push(getRandomItem(HomeData));
   
    
      
  return (
    <View style={{paddingLeft:25}}>
      <Text style={styles.Title}> you might also like:</Text>
      
      <FlatList  
      horizontal={true}
      data={RCM_Data}
      keyExtractor={(item, index)=> index}
                
       renderItem={({item})=>
                  
                <RenderItem item={item}   />
                 
              
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
       Title:{
        color: '#9FF8EF',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        textTransform:'uppercase'
       },
     
    
      
})
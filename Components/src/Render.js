import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export  function Render() {
  return (
    <View>
      <Text>Render</Text>
    </View>
  )
}


export function RenderItem({item, ToggleItem}) {

    const url=`http://192.168.1.4/API/images/`;
    let Images= item.images[0].split('|');
    Images= Images.map(str=> str.trim())
    
   
    return (

      <View style={styles.Product} key={item.id}>
        <TouchableOpacity onPress={() => ToggleItem(item)}>
          <Image style={styles.ProductImg} source={{ uri: `${url}${Images[0]}`}}></Image>
          <Text  style={styles.name}> {item.name}</Text>
          <Text style={styles.price}> {item.price} VND</Text>

         
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({

Product: {
    width: "50%",
    alignContent: "center",
    alignItems: "center",
  },
  ProductImg: {
    width: 200,
    height: 200,
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
})
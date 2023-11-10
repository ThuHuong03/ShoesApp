import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Custom_btn({Title, onPress}) {
  return (
    <TouchableOpacity style={styles.button}
    
    >
    <Text style={styles.buttonText}> {Title}</Text>
     </TouchableOpacity>
  )
}

const styles= StyleSheet.create({

    button:{
        width: 150,
        height: 40,
        borderWidth: 3,
        borderColor: '#9FF8EF',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
       
       
      },
      buttonText:{
        fontSize: 15,
        color:'#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
      }
}) 
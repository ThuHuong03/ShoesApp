import { View, Text, SafeAreaView, StyleSheet, ImageBackground,Image, SectionList } from 'react-native'
import React from 'react'
import {Data} from '../src/data'
import Menu_bar from '../src/Menu_bar'

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.ImageBackground} source={require('../assets/background.png')}>
            <View style={styles.Menubar}>
            <Menu_bar/>
            </View>

            <View style={styles.scroll_screen}>

                <SectionList  
                sections={Data}
                keyExtractor={(data) =>data.id}
                renderItem={({item}) =>
            
                <View style={{ flexDirection:'column', flex: 1}}>

                    <Image source={item.image}  style={styles.pic}  ></Image>
                  <Text  style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text> 
                </View>
            }   
                >


                </SectionList>
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
    title:{
        color: '#9FF8EF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform:'uppercase'
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
        alignItems:'center',},

       
       
       
})
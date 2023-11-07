import { View, Text, SafeAreaView, StyleSheet, ImageBackground,Image, FlatList,TouchableOpacity , Dimensions} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import {Data_Item} from '../src/data'
import Menu_bar from '../src/Menu_bar'
import { useRoute } from '@react-navigation/native'

function SwiperImgItem (){

    <Text> Đây là SwiperImgItem</Text>
}


  
export default function Item() {
   
    const route= useRoute();
    const {ID}= route.params;
    const Item = Data_Item.find(data => data.id== ID);
      return (
        
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    
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
              width: Dimensions.get('window').width / 2 - 40,
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
            width: 400,
            height: 400,
            alignContent: 'center',
            alignItems:'center',
            resizeMode: 'cover'
        },
    
          Title:{
              color: '#9FF8EF',
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'left',
              marginLeft: 25,
              textTransform:'uppercase'
             },
    
           
           
           
    })
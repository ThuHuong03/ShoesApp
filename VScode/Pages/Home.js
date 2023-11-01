import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import {item_menu} from '../src/data.js'
import Menu_bar from '../src/Menu_bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';




export default function Home  () {
  const navigation = useNavigation();
  const ToggleSeeAll= (item)=>{
    navigation.navigate('SeeAll',{Title: item.item.name})
   
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

      <FlatList style={styles.scroll_screen}
        data={item_menu}
        renderItem={ ({item}) => 
          <View style={styles.item}>
              <Text style={styles.Title}>{item.name}</Text>
              <View style={{ flexDirection:'row', flex: 2, justifyContent:'space-between'}}>
                
                <View style={{ flexDirection:'column' , flex:1}}>
                  <Image source={item.pic1}  style={styles.pic} ></Image>
                  <Text style={styles.name}>{item.item1}</Text>
                  <Text style={styles.price}>{item.price1}</Text> 
               
                </View>

                <View style={{ flexDirection:'column', flex: 1}}>
                  <Image source={item.pic2}  style={styles.pic}  ></Image>
                  <Text  style={styles.name}>{item.item2}</Text>
                  <Text style={styles.price}>{item.price2}</Text> 
               
                </View>
               </View>

               <TouchableOpacity onPress={ ()=>  ToggleSeeAll({item})  } ><Text style={styles.see_all}> See all</Text></TouchableOpacity>
          </View>
      }
        keyExtractor={item => item.id}
      /> 
    
      
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

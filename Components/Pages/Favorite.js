import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React, { useRef, useEffect, useState, useContext } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { Bag_Data } from "../src/data";
  import Menu_bar from "../src/Menu_bar";
  import { useFocusEffect, useRoute } from "@react-navigation/native";
  import { ScrollView } from "react-native-gesture-handler";
  import Custom_btn from "../src/custom_btn";
  import Might_like from "../src/Might_like";
  import { useNavigation } from "@react-navigation/native";
  import { RenderFavorItem } from "../src/Render";
  import { MyContext } from "../src/MyContext";
  import axios from "axios";
  import LottieView from "lottie-react-native";
import Get_Cart from "../API/Get_Cart";
import Get_Favor from "../API/Get_Favor";

  
  export default function Favorites() {
    const Auth= useContext(MyContext);
    const {Localhost, User, FavoriteData, setFavoriteData }= Auth;
  
  
    navigation = useNavigation();
  

  
    
    const ToggleShopping= ()=>{
      navigation.navigate('Home');
      // console.log("Shopping")
    }
   
    useEffect(()=>{
   
    navigation.addListener('focus', ()=>{
        
    Get_Favor(Auth);
      
    })
     
 
  
     })
   
  
    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={require("../assets/background.png")}
        >
          <View style={styles.Menubar}>
            <Menu_bar />
          </View>
           <View style={styles.scroll_screen}>
        {(FavoriteData.length==0) ? (
          <View style={styles.container}>
            <LottieView
              source={require('../assets/Find.json')}
              autoPlay 
              />
              <TouchableOpacity onPress={ToggleShopping}>
                <Text style={styles.Title}>There is nothing in your Favorite List! Let's Find out what you like!</Text>
              </TouchableOpacity>
          
              </View>
        ):
        (
          <View>
            <Text style={styles.Title}> My Favorite List</Text>
           <FlatList
              data={FavoriteData}
              style={{height:'90%'}}
              keyExtractor={(item, index) => index}
              numColumns={1}
              renderItem={
                ({ item }) => (
                    // console.log(item)
                  <RenderFavorItem item={item} />
                  // <Text> H</Text>
                 
                )
                
              }
            /> 
           
          
           </View>
        )}
             
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    ImageBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    Menubar: {
      height: "8%",
      width: "100%",
      flexDirection: "row",
      padding: 25,
      paddingTop: 20,
      flex: 2,
    },
    scroll_screen: {
      // backgroundColor:'white',
      height: "90%",
      width: "100%",
    },
    price: {
      fontSize: 25,
      
      color: "white",
      fontWeight: "800",
      textAlign: "center",
      textTransform: "uppercase",
    },
    Checkout:{
      flexDirection:'row',
      justifyContent: "space-between",
      alignItems: "center",
  
      padding:25,
    },
    Title:{
      fontSize:30,
      textAlign: 'center',
      //padding:50,
      color: '#9FF8EF',
      fontWeight: 'bold',
  
  }
  
  });
  
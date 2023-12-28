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
import { RenderBagItem } from "../src/Render";
import { MyContext } from "../src/MyContext";
import axios from "axios";
import LottieView from "lottie-react-native";
import Get_Cart from "../API/Get_Cart";

export default function Bag() {
  const Auth= useContext(MyContext);
  const {Localhost, User, BagData, setBagData, totalPrice}= Auth;


  navigation = useNavigation();

  const Checkout =()=>{
  navigation.navigate('CheckOut', {Total: totalPrice});

  }

  
  const ToggleShopping= ()=>{
    navigation.navigate('Home');
    // console.log("Shopping")
  }

  useEffect(()=>{
 
  navigation.addListener('focus', ()=>{
      Get_Cart(Auth);

    console.log("CalculateTotalPrice");
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
      {(BagData.length==0) ? (
        <View style={styles.container}>
          <LottieView
            source={require('../assets/Find.json')}
            autoPlay 
            />
            <TouchableOpacity onPress={ToggleShopping}>
              <Text style={styles.Title}>There is nothing in your Bag! Let's Shopping</Text>
            </TouchableOpacity>
        
            </View>
      ):
      (
        <View>

         <FlatList
            data={BagData}
            style={{height:'90%'}}
            keyExtractor={(item, index) => index}
            numColumns={1}
            renderItem={
              ({ item }) => (
                  // console.log(item)
                <RenderBagItem item={item} />
                // <Text> H</Text>
               
              )
              
            }
          /> 
         
          <View style={styles.Checkout}>
           
            <Text style={styles.price}> {totalPrice} VND</Text>
             <Custom_btn Title="Check out" onPress={Checkout}/>
         </View>
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

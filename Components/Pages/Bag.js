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
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Custom_btn from "../src/custom_btn";
import Might_like from "../src/Might_like";
import { useNavigation } from "@react-navigation/native";
import { RenderBagItem } from "../src/Render";
import { MyContext } from "../src/MyContext";
import axios from "axios";

export default function Bag() {
  const Auth= useContext(MyContext);
  const {BagData,Localhost}= Auth;
  

  navigation = useNavigation();
  const Checkout =()=>{
    axios.post(`${Localhost}cart.php`,
    {
      "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwiaWF0IjoxNzAzMjc1MDk5LCJleHBpcmUiOjE3MDM0NDc4OTl9.p_SLIxfy3GbKuvt0204SNsd1trK73dDTIXMgummVC8w",
   
       "arrayDetail": [
           { "id": 2, "quantity": 1,"size":36 },
           { "id": 3, "quantity": 1,"size": 38 }
         ]
       
   }
    )
  }
  
  useEffect(()=>{
    console.log(Auth.BagData.length);
  },[])

  // console.log(BagData)
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
          <FlatList
            data={BagData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={
              ({ item }) => (
                  // console.log(item)
                <RenderBagItem item={item} />
                // <Text> H</Text>
               
              )
              
            }
          />
          <Custom_btn Title="Check out" onPress={Checkout}/>
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

});

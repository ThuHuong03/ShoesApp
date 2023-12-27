import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import { item_menu } from "../src/data.js";
import Menu_bar from "../src/Menu_bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { MyContext } from "../src/MyContext.js";
import { RenderItem, RenderSearchItem } from "../src/Render.js";
import Custom_btn from "../src/custom_btn.js";
import Searchicon from "../assets/Search.svg";
import LottieView from "lottie-react-native";

export default function Search() {
  const navigation = useNavigation();
  const Auth = useContext(MyContext);
  const { Localhost} = Auth;
    const [Item, onChangeItem]= useState('');
    const [SearchData, setSearchData] = useState(null);
  // console.log(User);
  const SearchItem=()=>{
    if(Item=='')
    {
        Alert.alert("Notice", "Please type the search");
        return;
    }
    const url= `${Localhost}search.php?key=${Item}`
    axios.get(url)
    .then(res=>{
      if( typeof res.data == "string") 
      {
         Alert.alert("Notice", "Can't find the search");
         setSearchData(null);
      }
       
       else setSearchData(res.data);
      // console.log( typeof res.data);
    })
    .catch(err=>{console.log(err);});
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.png")}
        resizeMode="cover"
      >
        <View style={styles.Menubar}>
          <Menu_bar />
        </View>
        <View style={styles.scroll_screen}>
            <View style={styles.item} >

            <TextInput style={styles.inputText}
                        onChangeText={(text)=>onChangeItem(text)}
                        value={Item}
                        placeholder='Type what you finding'
                        
                        placeholderTextColor='#69A09E'
                        
                    />
                    <TouchableOpacity onPress={SearchItem}>
                         <Searchicon width={30} height={30} />
                    </TouchableOpacity>
                   

            </View>
         {(SearchData == null)? (
            <View style={styles.container}>
            <LottieView
            source={require('../assets/Find.json')}
            autoPlay 
            />
            </View>

            // <Text style={styles.inputText}> Nothing here</Text>
         ):
           
            <FlatList
            data={SearchData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={
              ({ item }) => (
                 
                <RenderSearchItem item={item} />
               
               
              )
              
            }
          />
        }
        
            
        
         
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,

    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  Menubar: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
    padding: 25,
    paddingTop: 20,
    flex: 2,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },

  scroll_screen: {
    // backgroundColor:'white',
    height: "90%",
    width: "100%",
    // padding: 25,
  },
  inputText:{
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    color: '#9FF8EF'
  },
  item: {
    flexDirection: "row",
   alignItems:'center',
   alignContent: 'center',
    padding: 25,
    // backgroundColor:'white',
      //  margin: 25,
  },

});

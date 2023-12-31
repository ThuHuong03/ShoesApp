import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { item_menu } from "../src/data.js";
import Menu_bar from "../src/Menu_bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { MyContext } from "../src/MyContext.js";
import { RenderItem } from "../src/Render.js";
import Custom_btn from "../src/custom_btn.js";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfile() {
  const navigation = useNavigation();
  
  const Auth = useContext(MyContext);
  const { User,setUser, Token, Localhost } = Auth;
  const [ FullName, setFullName ] = useState(User.name)
  const [Phone, setPhone]= useState(User.phone)
  const [Address, setAddress] = useState(User.address)
  const ChangeInfo = ()=>{
    if(Phone  == ''||FullName == ''||Address =='')
    {
        Alert.alert("Notice", "Please fill your information throughly...");
        return;
    }
    axios.post(`${Localhost}change_info.php`,
    {
      "token": Token,
      "name": FullName,
      "phone": Phone,
      "address": Address
    })
    .then(response => {
      Alert.alert("Congratulations", "Your information has been updated")
      navigation.navigate('Profile');
    setUser(response.data);
  })
    .catch(error =>console.log(error))
  }
  // console.log(User);
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
          
            <Text style={styles.Title}> Hi {User.name} !</Text>
            
         
          <View style={styles.item}>
            <Text style={styles.name}> Full name:</Text>
            <TextInput 
            style={styles.inputText}
            value={FullName} 
            onChangeText={setFullName}
            placeholder='Full Name'
            placeholderTextColor='#69A09E'
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Email:</Text>

            <Text style={styles.price}> {User.email}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Phone number:</Text>
            <TextInput style={styles.inputText}
            onChangeText={setPhone}
            value={Phone}
              placeholder='Phone Number'
               placeholderTextColor='#69A09E'
       ></TextInput>  
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Address: </Text>
            <TextInput style={styles.inputText}
        onChangeText={setAddress}
        value={Address}
        placeholder='Address'
         placeholderTextColor='#69A09E'
       ></TextInput>
          </View>
          <View
            style={{ alignContent: "center", alignItems: "center", margin: 30 }}
          >
            <Custom_btn Title="Save" onPress={ChangeInfo} />
          </View>
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
    padding: 25,
  },
  item: {
    flexDirection: "row",
    marginTop: 30,
    // backgroundColor:'white',
    //    margin: 25,
  },
  Title: {
    color: "#9FF8EF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "uppercase",
  },
  inputText:{
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    // margin: 10,
    padding: 10,
    color: '#9FF8EF'
  },
  name: {
    fontSize: 15,
    width: 150,
    color: "white",
    fontWeight: "800",
    textAlign: "left",
    textTransform: "uppercase",
  },
  price: {
    fontSize: 13,
    width: 150,
    color: "white",
    // fontWeight:"normal",
    textAlign: "left",
    textTransform: "uppercase",
  },
  pic: {
    width: 150,
    height: 150,
    alignItems: "center",
  },
  see_all: {
    color: "#9FF8EF",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "right",
    textTransform: "uppercase",
  },
});

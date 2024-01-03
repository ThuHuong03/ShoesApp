import React, { useContext, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
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

export default function Profile() {
  const navigation = useNavigation();
  const Auth = useContext(MyContext);
  const { User, Logout } = Auth;

  const ToggleEdit = ()=>{
    navigation.navigate('EditProfile' )
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
          <View style={{flexDirection:'row', justifyContent:"space-between"}}>
            <Text style={styles.Title}> Hi {User.name} !</Text>
            <TouchableOpacity onPress={ToggleEdit}>
              <Ionicons name="create-outline" color="#9FF8EF" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Full name:</Text>
            <Text style={styles.price}> {User.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Email:</Text>
            <Text style={styles.price}> {User.email}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Phone number:</Text>
            <Text style={styles.price}> {User.phone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.name}> Address: </Text>
            <Text style={styles.price}> {User.address}</Text>
          </View>
          <View
            style={{ alignContent: "center", alignItems: "center", margin: 30 }}
          >
            <Custom_btn Title="Log out" onPress={Logout} />
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

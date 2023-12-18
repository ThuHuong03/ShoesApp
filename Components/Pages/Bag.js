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
import React, { useRef, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Bag_Data } from "../src/data";
import Menu_bar from "../src/Menu_bar";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Custom_btn from "../src/custom_btn";
import Might_like from "../src/Might_like";
import { useNavigation } from "@react-navigation/native";

export default function Bag() {
  const bag_data = { Bag_Data };
  navigation = useNavigation();
  const ClickItem = (item) => {
    navigation.navigate("Item", { ID: item.id });
  };
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
            data={Bag_Data}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={
              ({ item }) => (
                // <TouchableOpacity onPress={() =>ClickItem(item)}>
                <View style={styles.listItem}>
                  <Image source={item.image[0]} style={styles.pic}></Image>
                  <View style={{justifyContent:"space-around", marginLeft:25}}>
                    <Text style={styles.name}> CONVERSE {item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.item_color}> {item.color} | {item.type}</Text>
                  
                    <View style={styles.btn}>
                      <Ionicons name="heart-outline" size={30} color={'white'}/>
                      <Ionicons name="trash" size={30} color={'white'}/>
                      <Ionicons name="ellipse-outline" size={30} color={'white'}/>
                    </View>
                  </View>
                  <View style={styles.line}/>
                </View>
              )
              // {/* </TouchableOpacity> */}
            }
          />
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
  listItem: {
    padding: 25,
    flexDirection: "row",
  },

  pic: {
    width: 200,
    height: 200,
    alignItems: "center",
  },

  name: {
    fontSize: 20,
    // width:150,
    color: "white",
    fontWeight: "800",
    textAlign: "right",
    textTransform: "uppercase",
  },
  price: {
    fontSize: 17,
    // width:150,
    color: "white",
    // fontWeight:"normal",
    textAlign: "right",
    textTransform: "uppercase",
  },
  item_color:{
    color:"#69A09E",
    fontSize:15,
    fontWeight:'300'
  },
  btn:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line:{
    height:2,
    with: '100%',
    backgroundColor:"white"
  }
});

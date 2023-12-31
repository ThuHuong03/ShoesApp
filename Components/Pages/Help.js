import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React from "react";
import { Marker } from "react-native-maps";
import Menu_bar from "../src/Menu_bar";

export default function Help() {
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
   <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.8703,
    longitude: 106.8032, 
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
      <Marker
        coordinate={{ latitude: 10.8703, longitude: 106.8032}}
        title="Hương Nguyễn"
        description="React Native Expo Shoes Application"
      />
      </MapView>
      <Text style={styles.Title}> Any inquiries can be addressed at our store or through our hotline: 21520905</Text>
      <Text style= {styles.sub_title}> We will always be dedicated to addressing all inquiries with care and diligence</Text>
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
background:{
    flex: 1,
    justifyContent  :'center'
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width:Dimensions.get("window").width - 50,
    height: "50%",
    alignSelf: "center",
    borderColor: 'white',
    borderRadius: '10',
    borderWidth: 1
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
  Title: {
    color: "#9FF8EF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 25,
    textTransform: "uppercase",
  },
  sub_title: {
    color: "white",
    fontSize: 15,
    marginLeft: 25,
    fontWeight: "300",
  },
});

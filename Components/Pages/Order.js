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

import Menu_bar from "../src/Menu_bar";

import { useNavigation } from "@react-navigation/native";
import { RenderBagItem, RenderOrders } from "../src/Render";
import LottieView from "lottie-react-native";
import { MyContext } from "../src/MyContext";
import axios from "axios";

export default function Order() {
  const Auth = useContext(MyContext);
  const { BagData, Localhost, Token } = Auth;
  const [Orders, setOrders] = useState([]);

  navigation = useNavigation();

  function fectchOders() {
    axios
      .post(`${Localhost}order_history.php`, {
        token: Token,
      })
      .then((response) => {
        if (typeof response.data === "string") setOrders([]);
        else setOrders(response.data);
      })
      .catch((error) => console.log(error, Token));
  }
  const ToggleShopping= ()=>{
    navigation.navigate('Home');
    // console.log("Shopping")
  }

  useEffect(() => {
    fectchOders();
  }, []);

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
          {Order.length == 0 ? (
            <View style={styles.container}>
              <LottieView source={require("../assets/Find.json")} autoPlay />
              <TouchableOpacity onPress={ToggleShopping}>
                <Text style={styles.Title}>
                  You haven't bought anything! Let's Shopping
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <FlatList
                data={Orders}
                keyExtractor={(item) => item.id}
                numColumns={1}
                renderItem={({ item }) => (
                  // console.log(item)
                  //   <RenderBagItem item={item} />
                  <RenderOrders item={item} />
                )}
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
  Title:{
    fontSize:30,
    textAlign: 'center',
    //padding:50,
    color: '#9FF8EF',
    fontWeight: 'bold',

}
});

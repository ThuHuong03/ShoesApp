import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  Dimensions,
  useColorScheme,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Data } from "../src/data";
import Menu_bar from "../src/Menu_bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "../src/MyContext";
import Get_Product_byType from "../API/Get_Product_byType";
import axios from "axios";
import { RenderItem } from "../src/Render";

export default function List({ Type }) {
  const Auth = useContext(MyContext);
  navigation = useNavigation();
  const [List_Data, SetList] = useState([]);

  function conmponentDidMount() {
    axios
      .get(`${Auth.Localhost}product_by_type.php?id_type=${Type.id}&page=1`)
      .then((response) => {
        SetList(response.data);
        // console.log(response.data.length);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    conmponentDidMount();
    // console.log('lis',List_Data)
    // console.log(Type)
  }, []);
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
          <View>
            <Text style={styles.Title}>{Type.name}</Text>
          </View>
          <FlatList
            data={List_Data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => <RenderItem item={item}  />}
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
    padding: 10,
    paddingBottom: 10,
    width: Dimensions.get("window").width / 2 - 50,
    margin: 15,
    alignContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 15,
    width: 150,
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase",
  },
  price: {
    fontSize: 13,
    width: 150,
    color: "white",
    // fontWeight:"normal",
    textAlign: "center",
    textTransform: "uppercase",
  },
  pic: {
    width: 200,
    height: 200,
    alignItems: "center",
  },

  Title: {
    color: "#9FF8EF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 25,
    textTransform: "uppercase",
  },
});

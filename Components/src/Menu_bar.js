import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Home from "../assets/home.svg";
import Menu from "../assets/Menu.svg";
import Search from "../assets/Search.svg";
import Bag from "../assets/Bag.svg";
import User from "../assets/User.svg";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Menu_bar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", flex: 2 }}>
      <View style={styles.subMenu}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate("Main", {Screen:"Home"});
          }}
        >
          <Home width={30} height={30}></Home>
        </TouchableOpacity>
      </View>

      <View style={styles.subMenu}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Search width={30} height={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate("MyBag", {Screen: 'Bag'});
          }}
        >
          <Bag width={30} height={30}></Bag>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate("MyProfile", {Screen: 'Profile'});
          }}
        >
          <User width={30} height={30}></User>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <Menu width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subMenu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
  },
});
export default Menu_bar;

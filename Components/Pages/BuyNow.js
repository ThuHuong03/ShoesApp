import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    Dimensions,
    TextInput,
    Modal,
    Button,
    Alert,
    ScrollView,
  } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { Data } from "../src/data";
  import Menu_bar from "../src/Menu_bar";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { MyContext } from "../src/MyContext";
  import Get_Product_byType from "../API/Get_Product_byType";
  import axios from "axios";
  import { RenderBillDetail, RenderItem } from "../src/Render";
  import { Ionicons } from "@expo/vector-icons";
  import Custom_btn from "../src/custom_btn";
  import Delete_All_Cart from "../API/Delete_All_Cart";
  import Get_Orders from "../API/Get_Orders";
  
  export default function BuyNow() {
    const Auth = useContext(MyContext);
    const { User, setUser, Localhost, Token, BagData, setBagData } = Auth;
    navigation = useNavigation();
    const [FullName, setFullName] = useState(User.name);
    const [Phone, setPhone] = useState(User.phone);
    const [Address, setAddress] = useState(User.address);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const Route = useRoute();
    const BuyNowData = Route.params;
    
  
    const Checkout = () => {
      Alert.alert("Congratulations", "You have successfully checked out");
      // console.log(BagData);
      const arrayDetail =[];
      arrayDetail.push({id: BuyNowData.product_id, size: BuyNowData.size, quantity: BuyNowData.quantity})
      console.log(arrayDetail);
      axios
        .post(`${Localhost}cart.php`, {
          token: Token,
  
          arrayDetail: arrayDetail,
        })
        .then(() => {
         Get_Orders(Auth);
        });
  
      navigation.navigate("Main");
    };
    const CheckOutMomo = () => {
      navigation.navigate("CheckOutMomo");
    };
  
    const ChangeInfo = () => {
      if (Phone == "" || FullName == "" || Address == "") {
        Alert.alert("Notice", "Please fill your information throughly...");
        return;
      }
      axios
        .post(`${Localhost}change_info.php`, {
          token: Token,
          name: FullName,
          phone: Phone,
          address: Address,
        })
        .then((response) => {
          Alert.alert("You have successfully updated your account");
          setUser(response.data);
        })
        .catch((error) => console.log(error));
    };
  
    // function conmponentDidMount() {
    //   axios
    //     .get(`${Auth.Localhost}product_by_type.php?id_type=${Type.id}&page=1`)
    //     .then((response) => {
    //       SetList(response.data);
    //       // console.log(response.data.length);
    //     })
    //     .catch((error) => console.log(error));
    // }
  
    useEffect(() => {
      //   conmponentDidMount();
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
          <Text style={styles.Title}> Check out</Text>
          <View style={styles.scroll_screen}>
            <ScrollView style={{ height: 350 }}>
              <View style={styles.inputContainer}>
                <Text style={styles.title}>Full name:</Text>
                <TextInput
                  style={styles.inputText}
                  onChangeText={setFullName}
                  value={FullName}
                  placeholder="Full Name"
                  placeholderTextColor="#69A09E"
                ></TextInput>
                <Text style={styles.title}>Email:</Text>
                <TextInput
                  style={styles.inputText}
                  // onChangeText={onChangeEmail}
                  value={User.email}
                  placeholder="Email"
                  placeholderTextColor="#69A09E"
                ></TextInput>
                <Text style={styles.title}>Phone Number:</Text>
                <TextInput
                  style={styles.inputText}
                  onChangeText={setPhone}
                  value={Phone}
                  placeholder="Password"
                  placeholderTextColor="#69A09E"
                  //  secureTextEntry='true'
                ></TextInput>
                <Text style={styles.title}>Address:</Text>
                <TextInput
                  style={styles.inputText}
                  onChangeText={setAddress}
                  value={Address}
                  placeholder="Address"
                  placeholderTextColor="#69A09E"
                  numberOfLines={4}
                  //  secureTextEntry='true'
                ></TextInput>
  
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.buttonText}>
                    {" "}
                    Update Account Infomation
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <Modal
              visible={isModalVisible}
              transparent={true}
              animationType="fade"
            >
              <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <View
                  style={{
                    alignSelf: "center",
                    width: Dimensions.get("window").width / 2,
                    backgroundColor: "#fff",
                    padding: 20,
                    borderRadius: 5,
                    marginTop: 300,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "black",
                      alignSelf: "center",
                      marginBottom: 10,
                    }}
                  >
                    Are you sure you want to Update your account information?
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button
                      title="Yes"
                      onPress={() => {
                        setModalVisible(!isModalVisible), ChangeInfo();
                      }}
                      color={"#FA7070"}
                    />
                    <Button
                      onPress={() => {
                        setModalVisible(!isModalVisible);
                      }}
                      title="No"
                      color={"#39A7FF"}
                    />
                  </View>
                </View>
              </View>
            </Modal>
  
            <Text style={styles.title}>Bill Detail:</Text>
            
                
                <RenderBillDetail item={BuyNowData} />
                
             
            <Text style={styles.title}> Total: {BuyNowData.Total} VND</Text>
  
            <Text style={styles.title}> Payment Method:</Text>
            <View style={styles.pick_box}>
              <Custom_btn Title="COD" onPress={Checkout} />
              <Custom_btn Title="MOMO" onPress={CheckOutMomo} />
            </View>
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
    title: {
      color: "#ffffff",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      marginLeft: 25,
    },
    inputText: {
      width: 300,
      height: 40,
      borderWidth: 1,
      borderColor: "#B5B5B5",
      borderRadius: 5,
      margin: 10,
      marginLeft: 25,
      padding: 10,
      color: "#9FF8EF",
    },
    mess: {
      color: "#9FF8EF",
      fontWeight: "bold",
      textAlign: "right",
      padding: 20,
      paddingRight: 50,
    },
    button: {
      width: Dimensions.get("window").width / 2,
      // height: 40,
      borderWidth: 3,
      borderColor: "#9FF8EF",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      margin: 25,
    },
    buttonText: {
      fontSize: 15,
      color: "#ffffff",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      padding: 10,
    },
    pick_box: {
      flexDirection: "row",
      justifyContent: "space-between",
  
      // width: Dimensions.get("window").width/2 - 50,
      padding: 25,
    },
  });
  
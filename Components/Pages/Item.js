
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Modal,
    Alert
  
  } from "react-native";
  import React,{useRef, useEffect, useState, useContext} from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { Data } from "../src/data";
  import Menu_bar from "../src/Menu_bar";
  import { useRoute } from "@react-navigation/native";
  import { ScrollView } from "react-native-gesture-handler";
  import Custom_btn from "../src/custom_btn";
  import Might_like from "../src/Might_like";
import { MyContext } from "../src/MyContext";
import Add_Cart from "../API/Add_Cart";
import Edit_Cart from "../API/Edit_Cart";
import Add_Favor from "../API/Add_Favor";
import Delete_Favor from "../API/Delete_Favor";
  

  
const InFavor =({id, Auth}) =>{
  if(Auth.FavoriteData.length ==0)
  return(
 <TouchableOpacity onPress={()=>Add_Favor(Auth, id)}>
     <Ionicons name="heart-outline" size={40} color={"white"} />
   </TouchableOpacity>
 )
 
  const Find= Auth.FavoriteData.find((product) => product.product_id ==id);
 
 
   if(Find== true)
   return (
   <TouchableOpacity onPress={()=>Add_Favor(Auth, id)}>
     <Ionicons name="heart-outline" size={40} color={"white"} />
   </TouchableOpacity>
   
   
 )
 else return (
   <TouchableOpacity onPress={() => Delete_Favor ( Auth, id)}>
     <Ionicons name="heart" size={40} color={"white"} />
   </TouchableOpacity>
   
 )
 }
  
  export default function Item() {
   
    const route = useRoute();
    const Auth =useContext(MyContext);
    const {BagData, setBagData, Localhost}= Auth;
    const {product} = route.params;
    
    let Images= product.images[0].split('|');
    Images= Images.map(str=> str.trim())


   
    const availableSizes= ['35','36','37','38','39','40','41','42','43','44','45'];
  
    const [Size, SetSize]= useState('--');
    const [Quantity, SetQuantity]= useState(0);
    const [isModalVisible,SetVisibility] = useState(false);
    const url =`${Localhost}images/`
    function ToggleModal(){
        SetVisibility(!isModalVisible);
        
    }
    function PickSize(item){
  
        SetSize(item);
        ToggleModal();
    }
  
    function ToggleMinusQty(){
      if(Quantity == 0) return;
      else SetQuantity(Quantity-1); 
    }
  
    function TogglePlusQty(){
      
     SetQuantity(Quantity+1);
    }
    
    function ToggleAddToCart(){
      if(Size == '--' && Quantity ==0) {
        Alert.alert ("Notice","Please select a size and quantity")
        return;
      }
      else if(Quantity == 0) {
        Alert.alert ("Notice","Please select a quantity")
        return;
      }
      else if(Size == '--') {
        Alert.alert ("Notice","Please select a size")
        return;
      }
      

        
        let NewBag= BagData;
        const index = NewBag.findIndex(item => item.product_id === product.id && item.size === Size);
        if(index!= -1) 
        {
          const NewQuantity=  NewBag[index].quantity + Quantity;

          Edit_Cart(Auth, product.id, Size, NewQuantity );
        }
        else 
                 Add_Cart(Auth, product.id, Size, Quantity)
      
    }


    
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={require("../assets/background.png")}
        >
          <View style={styles.Menubar}>
            <Menu_bar />
          </View>
  
          <ScrollView style={styles.scroll_screen}>
            <Text style={styles.Title}> {product.name}</Text>
            <Text style={styles.price}>{product.price}  VND</Text>
            <View style={{alignItems:'center'}}>
              <ScrollView 
             
              pagingEnabled 
              horizontal
              
              alwaysBounceHorizontal={true} 
              style={styles.Swiper}>
                {Images.map((image, index) => (
                  <Image key={index} source={{ uri: `${url}${image}`}} style={styles.pic} />
                ))}
              </ScrollView>
            </View>
  
  
            <View style={styles.pick}>
                <Text style={styles.title}>Size</Text>
                <View style={styles.pick_box}>
                  <Text>{Size}</Text>
                  <TouchableOpacity onPress={ToggleModal}>
                    
                    <Ionicons name="caret-down" size={20}></Ionicons>
                  </TouchableOpacity>
                </View>
  
            </View>
            <View style={styles.pick}>
                <Text style={styles.title}>Quantity</Text>
                <View style={styles.pick_box}>
                  <TouchableOpacity onPress={ToggleMinusQty}>
                    <Ionicons name="remove" size={20}/>
                  </TouchableOpacity>
                  <Text>{Quantity}</Text>
                  <TouchableOpacity onPress= {TogglePlusQty}>
                    <Ionicons name="add" size={20}></Ionicons>
                  </TouchableOpacity>
                </View>
            </View>
  
                <View style={styles.pick}>
  
                  <Custom_btn
                  Title="Add to Cart"
                  onPress={()=>{ToggleAddToCart()}}
                  />
                  <Custom_btn
                  Title="Buy Now"
                  />
                 <InFavor Auth={Auth} item={product.id}/>
  
                  </View>
              <Text style={styles.color}>
                Màu sắc: <Text>{product.color}</Text>
              </Text>
              <Text style={styles.color}>
                Loại: <Text>{product.material}</Text>
              </Text>
              <Text style={styles.content}>{product.description} </Text>
              {/* Đoạn code hiện thông tin của giày */}
            <Might_like product= {product}/>
 
  
  {/* Modal chọn size giày */}
  
             <Modal
             animationType="slide"
             transparent={true}
             visible={isModalVisible}
             onRequestClose={ToggleModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
            <View style={{ width: 200, backgroundColor: 'white', padding: 10 }}>
            {availableSizes.map((item, Index) => (
             
              <View key={Index}>
               <TouchableOpacity
               
                 style={{  padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc',  alignItems:'center' }}
                 onPress={() => PickSize(item)}
               >
                 <Text style={{alignContent:'center'}}>{item}</Text>
               </TouchableOpacity>
                </View>
            ))}
            </View>
            </View>
             </Modal>
  
          </ScrollView>
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
          width: Dimensions.get("window").width / 2 - 40,
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
          fontSize: 20,
          width: 150,
          color: "white",
          fontWeight:"bold",
          textAlign: "center",
          marginLeft: 25,
          textTransform: "uppercase",
        },
        color: {
          fontSize: 13,
          fontWeight: '700',
          color: "white",
          marginLeft: 25,
          // fontWeight:"normal",
          // textAlign: "center",
          textTransform: "uppercase",
        },
        
        pic: {
          width: Dimensions.get("window").width - 50,
          height: Dimensions.get("window").width - 50,
          alignItems: "center",
          resizeMode: "cover",
        },
        Title: {
          color: "#9FF8EF",
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: 25,
          textTransform: "uppercase",
        },
        Swiper: {
          width: Dimensions.get("window").width - 50,
          height: Dimensions.get("window").width - 50,
          margin:10,
        },
        pick:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems: 'center',
          margin: 25
        },
        pick_box:{
          flexDirection:'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          width: Dimensions.get("window").width/2 - 50,
          padding: 10,
        },
        title:{
          fontSize: 20,
          color: 'white'
        },
        content:{
          color:'white',
          margin:25,
          textAlign : 'justify'
        }
      });
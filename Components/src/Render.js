import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Edit_Cart from "../API/Edit_Cart";
import Get_Cart from "../API/Get_Cart";
import Delete_Cart from "../API/Delete_Cart";
import Add_Favor from "../API/Add_Favor";
import Delete_Favor from "../API/Delete_Favor";





const InFavor =({item, Auth}) =>{
 if(Auth.FavoriteData.length ==0)
 return(
<TouchableOpacity onPress={()=>Add_Favor(Auth, item.product_id)}>
    <Ionicons name="heart-outline" size={30} color={"white"} />
  </TouchableOpacity>
)
 const Find= Auth.FavoriteData.some((product) => product.product_id ===item.product_id);


  if(Find!= true)
  return (
  <TouchableOpacity onPress={()=>Add_Favor(Auth, item.product_id)}>
    <Ionicons name="heart-outline" size={30} color={"white"} />
  </TouchableOpacity>
  
  
)
else return (
  <TouchableOpacity onPress={() => Delete_Favor ( Auth, item.product_id)}>
    <Ionicons name="heart" size={30} color={"white"} />
  </TouchableOpacity>
  
)
}

export function RenderItem({ item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const url = `${Auth.Localhost}images/`;
  let Images = item.images[0].split("|");
  Images = Images.map((str) => str.trim());

  function ToggleItem(item) {
    navigation.navigate("Item", { product: item });
  }
  return (
    <View style={styles.Product}>
      <TouchableOpacity onPress={() => ToggleItem(item)}>
        <Image
          style={styles.ProductImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <Text style={styles.name}> {item.name}</Text>
        <Text style={styles.price}> {item.price} VND</Text>
      </TouchableOpacity>
    </View>
  );
}

export function RenderBagItem({ item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const [Product, setProduct] = useState({ images: ["|"] });
  const { BagData, setBagData, Localhost } = Auth;
  const url = `${Auth.Localhost}images/`;

  let Images = Product.images[0].split("|");
  Images = Images.map((str) => str.trim());

  function ToggleItem(item) {
    navigation.navigate("Item", { product: item });
  }
  function ToggleDelete(item) {
    let newCart = BagData.map((product) => {
      if (product.product_id == item.product_id && product.size == item.size)
      {
       
         Delete_Cart(Auth,item.product_id , item.size);
         
      }
       

      return product;
    });
    
  }

  const addQuantity = () => {
    let newCart = BagData.map((product) => {
      if (product.product_id == item.product_id && product.size == item.size)
      {
        const Quantity= Number(product.quantity)+1;
         Edit_Cart(Auth,item.product_id , item.size, Quantity);
         
      }
       

      return product;
    });
   
  };

  const reduceQuantity = () => {
    let newCart = BagData.map((product) => {
      if (product.product_id == item.product_id && product.size == item.size)
      {
        if(product.quantity== 1)
        {
            Delete_Cart(Auth,item.product_id, item.size);
        }
        else{
          const Quantity= Number(product.quantity)-1;
         Edit_Cart(Auth,item.product_id , item.size, Quantity);
        }
        
         
      }

      return product;
    });
    
  };

  useEffect(() => {
    const url = `${Localhost}product_detail.php?id=${item.product_id}`;
    axios
      .get(url)
      .then((response) => setProduct(response.data[0]))
      .catch((err) => console.log(err, url));
  });
  return (
    <TouchableOpacity onPress={() => ToggleItem(Product)}>
      <View style={styles.listItem}>
        <Image
          style={styles.ProductImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2 - 40,
          }}
        >
          <Text style={styles.B_name}> {Product.nameProduct}</Text>
          <Text style={styles.B_price}> {Product.price} VND</Text>
          <Text style={styles.item_color}>
            {" "}
            {Product.color} | {Product.material} | Size: {item.size}
          </Text>
          <View style={styles.btn}>
            <TouchableOpacity onPress={reduceQuantity}>
              <Ionicons
                name="remove-circle-outline"
                size={30}
                color={"white"}
              />
            </TouchableOpacity>

            <Text style={styles.B_price}> {item.quantity} </Text>
            <TouchableOpacity onPress={addQuantity}>
              <Ionicons name="add-circle-outline" size={30} color={"white"} />
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={() => ToggleDelete(item)}>
              <Ionicons name="trash" size={30} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity>
              {/* <Ionicons name="heart-outline" size={30} color={"white"} /> */}
              <InFavor item={item} Auth={Auth} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.line} />
      
    </TouchableOpacity>
  );
}

export function RenderSearchItem({ item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const url = `${Auth.Localhost}images/`;
  let Images = item.images[0].split("|");
  Images = Images.map((str) => str.trim());

  function ToggleItem(item) {
    navigation.navigate("Item", { product: item });
  }
  return (
    <TouchableOpacity onPress={() => ToggleItem(item)}>
      <View style={styles.listItem}>
        <Image
          style={styles.ProductImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2 - 40,
          }}
        >
          <Text style={styles.B_name}> {item.name}</Text>
          <Text style={styles.B_price}> {item.price} VND</Text>
          <Text style={styles.item_color}>
            {" "}
            {item.color} | {item.material}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
}

export function RenderOrders( {item} ) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);

  function ToggleItem(item) {
    navigation.navigate("Order Detail", { id: item.id });
  }
  return (
    <TouchableOpacity onPress={()=> ToggleItem(item)}>
      <View style={styles.listItem}>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2 - 40,
          }}
        >
          <View style={styles.item}>
            <Text style={styles.order_t}> Date Order:</Text>
            <Text style={styles.order_s}> {item.date_order}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.order_t}> Total:</Text>
            <Text style={styles.order_s}> {item.total} VND</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.order_t}> Status:</Text>
            <Text style={styles.order_s}>
              {" "}
              {item.status ? "On Shipping" : "Done"}
            </Text>
          </View>

       
        </View>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
}
export function RenderBillDetail({ item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const [Product, setProduct] = useState({ images: ["|"] });
  const { BagData, setBagData, Localhost } = Auth;
  const url = `${Auth.Localhost}images/`;

  let Images = Product.images[0].split("|");
  Images = Images.map((str) => str.trim());

 

  useEffect(() => {
    const url = `${Localhost}product_detail.php?id=${item.product_id}`;
    axios
      .get(url)
      .then((response) => setProduct(response.data[0]))
      .catch((err) => console.log(err, url));
  });
  return (
   
      <View style={styles.listItem}>
        <Image
          style={styles.BillImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2  +30,
          }}
        >
          <Text style={styles.B_name}> {Product.nameProduct}</Text>
          <Text style={styles.B_price}> {Product.price} VND</Text>
          <Text style={styles.item_color}>
            {" "}
            {Product.color} | {Product.material} | Size: {item.size} | Quantity :{item.quantity}
          </Text>
          
        </View>
           <View style={styles.line} />
        </View>
     
      
   
  );
}
export function RenderFavorItem({ item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const [Product, setProduct] = useState({ images: ["|"] });
  const { BagData, setBagData, Localhost } = Auth;
  const url = `${Auth.Localhost}images/`;

  let Images = Product.images[0].split("|");
  Images = Images.map((str) => str.trim());

  function ToggleItem(item) {
    navigation.navigate("Item", { product: item });
  }

  useEffect(() => {
    const url = `${Localhost}product_detail.php?id=${item.product_id}`;
    axios
      .get(url)
      .then((response) => setProduct(response.data[0]))
      .catch((err) => console.log(err, url));
  });
  return (
    <TouchableOpacity onPress={() => ToggleItem(Product)}>
      <View style={styles.listItem}>
        <Image
          style={styles.ProductImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2 - 40,
          }}
        >
          <Text style={styles.B_name}> {Product.nameProduct}</Text>
          <Text style={styles.B_price}> {Product.price} VND</Text>
          <Text style={styles.item_color}>
            {" "}
            {Product.color} | {Product.material} 
          </Text>
         

          <View style={styles.btn}>
           
            <TouchableOpacity>
              {/* <Ionicons name="heart-outline" size={30} color={"white"} /> */}
              <InFavor item={item} Auth={Auth} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.line} />
      
    </TouchableOpacity>
  );
}

export function RenderBill( {item }) {
  navigation = useNavigation();
  const Auth = useContext(MyContext);
  const [Product, setProduct] = useState({ images: ["|"] });
  const { BagData, setBagData, Localhost } = Auth;
  const url = `${Auth.Localhost}images/`;

  let Images = Product.images[0].split("|");
  Images = Images.map((str) => str.trim());

  function ToggleItem(item) {
    navigation.navigate("Item", { product: item });
  }

  useEffect(() => {
    const url = `${Localhost}product_detail.php?id=${item.id_product}`;
    axios
      .get(url)
      .then((response) => setProduct(response.data[0]))
      .catch((err) => console.log(err, url));

      
  });
  return (
    <TouchableOpacity onPress={() => ToggleItem(Product)}>
      <View style={styles.listItem}>
        <Image
          style={styles.ProductImg}
          source={{ uri: `${url}${Images[0]}` }}
        ></Image>
        <View
          style={{
            justifyContent: "space-around",
            marginLeft: 25,
            width: Dimensions.get("window").width / 2 - 40,
          }}
        >
          <Text style={styles.B_name}> {Product.nameProduct}</Text>
          <Text style={styles.B_price}> {Product.price} VND</Text>
          <Text style={styles.item_color}>
            {" "}
            {Product.color} | {Product.material} | Size: {item.size} | Quantity: {item.quantity} 
          </Text>
         

          <View style={styles.btn}>
           
            <TouchableOpacity>
           
              <InFavor item={item} Auth={Auth} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.line} />
      
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Product: {
    width: Dimensions.get("window").width / 2 ,
   
    alignContent: "center",
    alignItems: "center",
   
  },

  ProductImg: {
    width: Dimensions.get("window").width / 2 - 40,
    height: Dimensions.get("window").width / 2 - 40,
    alignSelf: 'center'
  },
  BillImg:
  {
    width: Dimensions.get("window").width / 2 - 100,
    height: Dimensions.get("window").width / 2 - 100,
  },
  name: {
    fontSize: 15,
    width: Dimensions.get("window").width / 2 ,
  
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    textTransform: "uppercase",
  },
  price: {
    fontSize: 13,
    width: Dimensions.get("window").width / 2 ,
    color: "white",
    // fontWeight:"normal",
    textAlign: "center",
    textTransform: "uppercase",
  },
  order_t: {
    fontSize: 13,
    width: Dimensions.get("window").width / 2 - 40,
    color: "white",

    textAlign: "left",
    textTransform: "uppercase",
  },
  order_s: {
    fontSize: 15,
    width: Dimensions.get("window").width / 2 - 40,
    color: "white",
    fontWeight: "800",
    // fontWeight:"normal",
    textAlign: "right",
    textTransform: "uppercase",
  },
  B_name: {
    fontSize: 20,
    // width:150,
    color: "white",
    fontWeight: "800",
    textAlign: "right",
    textTransform: "uppercase",
  },
  B_price: {
    fontSize: 17,
    // width:150,
    color: "white",
    // fontWeight:"normal",
    textAlign: "right",
    textTransform: "uppercase",
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

  item_color: {
    color: "#69A09E",
    fontSize: 15,
    fontWeight: "300",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    height: 2,
    with: "100%",
    backgroundColor: "white",
  },
  item: {
    flexDirection: "row",
    marginTop: 30,
    // backgroundColor:'white',
    //    margin: 25,
  },
});

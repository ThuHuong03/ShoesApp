import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Get_Orders from "../API/Get_Orders";

const MyContext = createContext();

function AuthProvider({ children }) {
  const [Auth, setAuth] = useState(false);
  const [Type, setType] = useState([]);
  const [HomeData, setHomeData] = useState([]);
  const [BagData, setBagData] = useState([]);
  const [FavoriteData, setFavoriteData] = useState([]);
  const [User, setUser] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [Orders, setOrders] = useState([]);
  const Signin = (data) => {
    const url = `${Localhost}get_favor.php?user_id=${data.user.id}`;
    axios
      .get(url)
      .then((response) => {
        if(typeof(response.data)=="string")
          setFavoriteData([]);
        else 
          setFavoriteData(response.data)})
      .catch((error) => console.log(error));

    setUser(data.user);
    // console.log(user);
    setToken(data.token);
    setAuth(true);
    
  };  
  const Localhost = "http://192.168.1.2/API/";
  const [Token, setToken] = useState("");
  const Logout = () => {
    setUser({});
    setToken("");
    setAuth(false);
  };
  const value = {
    Auth,
    Signin,
    Type,
    setType,
    HomeData,
    setHomeData,
    Localhost,
    BagData,
    setBagData,
    User,
    setUser,
    Logout,
    Token,
    FavoriteData, setFavoriteData,
    totalPrice, setTotalPrice,
    Orders, setOrders
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export { MyContext, AuthProvider };

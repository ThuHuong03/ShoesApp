import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { MyContext } from '../src/MyContext';

export default function Spalsh() {
    navigation= useNavigation();
    const {Localhost}= useContext(MyContext)
    const fetchDataFromAPI = ()=>{
        axios.get(Localhost)
        .then((response) => {return response.data})
        .catch((error) => {console.log(error); throw error})
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchDataFromAPI(); // Gọi hàm để lấy dữ liệu từ API
    
            // Nếu dữ liệu đã được lấy thành công, điều hướng đến màn hình chính
            if (data) {
              navigation.replace('MainScreen'); // Replace 'MainScreen' with your actual screen name
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Gọi hàm fetchData khi component Splash được render
      }, [navigation]);
  return (
    <View style={styles.container}>
      <LottieView
            source={require('../assets/Find.json')}
            autoPlay 
            />
            <Text style={styles.Title}> Loading data...</Text>
    </View>
  )
}

const styles = StyleSheet.create({container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
Title:{
    fontSize:30,
    textAlign: 'center',
    padding:50,
    fontWeight: 'bold',

}})
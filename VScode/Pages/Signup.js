import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import React,{useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack= createNativeStackNavigator();

function Signup_1(){
    return (
      <View>
        <Text>Signup_1</Text>
      </View>
    )
}

function Signup_2(){
    return (
      <View>
        <Text>Signup_2</Text>
      </View>
    )
}

export default function Signup() {
    const [Isvisible, setIsvisible] = useState(true);

    const toggleVisibility = ()=>{
        setIsvisible(!Isvisible);
    }
  
  
    return (
    <SafeAreaView style={styles.container}>
        {Isvisible && <Signup_1/>}
        {!Isvisible && <Signup_2/>}
        <Button title="Toggle Visibility" onPress={toggleVisibility} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
})
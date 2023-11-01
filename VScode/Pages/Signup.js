import { View, Text, StyleSheet, SafeAreaView, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React,{useContext, useState} from 'react'
import { MyContext } from '../src/MyContext';




    
function Signup_1(){
    return (
      <View style={styles.inputContainer}>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Email Address'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Password'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Confirm Password'
         placeholderTextColor='#69A09E'
       ></TextInput>
        
      </View>
    )
}

function Signup_2(){
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Full Name'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Phone Number'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Birthday'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        // onChangeText={onChangePassword}
        // value={Password}
        placeholder='Address'
         placeholderTextColor='#69A09E'
       ></TextInput>
      </View>
    )
}

export default function Signup({navigation}) {
  const [Isvisible, setIsvisible] = useState(true);

  const toggleVisibility = ()=>{
      setIsvisible(!Isvisible);
  }
  const Auth= useContext(MyContext);
  const SignUp = ()=>{
    Auth.Signin();
  }
  
  
    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style= {styles.background}>
        <Text style={styles.title}> Sign Up</Text>
        
        {Isvisible && <Signup_1/>}
        {!Isvisible && <Signup_2/>}
        {Isvisible &&<TouchableOpacity style={styles.button}
            onPress={toggleVisibility}
            >
            <Text style={styles.buttonText}> Next</Text>
             </TouchableOpacity>}
        {!Isvisible &&<TouchableOpacity style={styles.button}
            onPress={SignUp}
            >
            <Text style={styles.buttonText}> SIGN UP</Text>
             </TouchableOpacity>}
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 30,
    },
    background:{
      flex: 1,
      justifyContent  :'center',
      alignItems: 'center'
    },
    title:{
      color: '#9FF8EF',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform:'uppercase'
    },
    inputContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      padding: 10,
    },
    inputText:{
      width: 300,
      height: 40,
      borderWidth: 1,
      borderColor: '#B5B5B5',
      borderRadius: 5,
      margin: 10,
      padding: 10,
      color: '#9FF8EF'
    },
    button:{
      width: 100,
      height: 40,
      borderWidth: 3,
      borderColor: '#9FF8EF',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin:20
     
     
    },
    buttonText:{
      fontSize: 15,
      color:'#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    }
})
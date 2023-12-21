import { View, Text, StyleSheet, SafeAreaView, Button, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useContext, useState} from 'react'
import { MyContext } from '../src/MyContext';
import axios from 'axios';




    
function Signup_1({Email, Password, ConfirmPassword, onChangeEmail, onChangePassword, onChangeConfirmPassword}){
    return (
      <View style={styles.inputContainer}>
       <TextInput style={styles.inputText}
        onChangeText={(text)=> onChangeEmail(text)}
        value={Email}
        placeholder='Email Address'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        onChangeText={(text)=> onChangePassword(text)}
        value={Password}
        placeholder='Password'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        onChangeText={(text)=>onChangeConfirmPassword(text)}
        value={ConfirmPassword}
        placeholder='Confirm Password'
         placeholderTextColor='#69A09E'
       ></TextInput>
        
      </View>
    )
}

function Signup_2({UserName,Phone, Address, onChangeAddress, onChangePhone, onChangeUsername }){
    return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText}
        onChangeText={(text)=>onChangeUsername(text)}
        value={UserName}
        placeholder='Full Name'
         placeholderTextColor='#69A09E'
       ></TextInput>
       <TextInput style={styles.inputText}
        onChangeText={(text) => onChangePhone(text)}
        value={Phone}
        placeholder='Phone Number'
         placeholderTextColor='#69A09E'
       ></TextInput>  
       <TextInput style={styles.inputText}
        onChangeText={(text) => onChangeAddress(text)}
        value={Address}
        placeholder='Address'
         placeholderTextColor='#69A09E'
       ></TextInput>
      </View>
    )
}

export default function Signup({navigation}) {
  const [Isvisible, setIsvisible] = useState(true);

  const toggleVisibility = ()=>{
    if(Email == '')
    {
      Alert.alert("Notice", "Please enter your email address");
      return;
    }
    else if(Password== '')
     {
      Alert.alert("Notice", "Please enter your password");
      return;
     }

    else if(ConfirmPassword!== Password || ConfirmPassword== '')
     {
      Alert.alert("Notice", "Please enter your Confirm Password matches the Password");
      return;
     }

    else setIsvisible(!Isvisible);
  }
  const Auth= useContext(MyContext);
  const {Localhost}= Auth;
  const SignUp = ()=>{
    if(UserName =='' || Phone=='' || Address =='')
    {
      Alert.alert("Notice", "Please fill your Name, Phone Number and Address");
      

    }
    else{
    // Auth.Signin();
    navigation.navigate("Signin");
    axios.post(`${Localhost}register.php`, 
      {
        email: Email,
        password: Password,
        name: UserName,
        phone: Phone,
        address: Address,
      }
      
      )
      .then((res)=> {
        if(res.data=="THANH_CONG")
          {
            Alert.alert("Congratulations", "You have successfully registered");
            
        }
        else 
        Alert.alert("Sorry","This Email is already registered")
      })
      .catch((err)=> console.log(err))

    }
  }
  const [Email, setEmail]= useState('');
  
  const [Password, setPassword]= useState('');
  const [ConfirmPassword, setConfirmPassword]= useState('');
  const [UserName, setUserName]= useState('');
  const [Phone, setPhone]= useState('');
  const [Address, setAddress]= useState('');

  function onChangeEmail(Text){
      setEmail(Text);
  }

   function onChangePassword(Text){
    setPassword(Text);
   }
   function onChangePhone(Text){
    setPhone(Text);
   }
   function onChangeAddress(Text){
    setAddress(Text);
   }
   function onChangeConfirmPassword(Text){
    setConfirmPassword(Text);
   }
   function onChangeUserName (  Text){
    setUserName(Text);
   }
    return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} style= {styles.background}>
        <Text style={styles.title}> Sign Up</Text>
        
        {Isvisible && <Signup_1 Email={Email} Password={Password} ConfirmPassword={ConfirmPassword} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} onChangeConfirmPassword={onChangeConfirmPassword}/>}
        {!Isvisible && <Signup_2 UserName={UserName} Phone={Phone} Address={Address} onChangeAddress={onChangeAddress} onChangePhone={onChangePhone} onChangeUsername={onChangeUserName}/>}
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
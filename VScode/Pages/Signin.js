import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MyContext } from '../src/MyContext'




export default function Signin({navigation}) {
    const [Email, onChangeEmail] = useState('');
    const [Password, onChangePassword] = useState('');
    const Auth = useContext(MyContext);

    const SignIn = ()=>{
      
      Auth.Signin();
    }

  return (
    <SafeAreaView style={styles.container}>
      
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
        
        <Text style={styles.title}> SIGN IN</Text>

        <View style={styles.inputContainer}>
            <TextInput style={styles.inputText}
                onChangeText={onChangeEmail}
                value={Email}
                placeholder='Email Address'
                
                placeholderTextColor='#69A09E'
                
            >

            </TextInput>

            <TextInput style={styles.inputText}
                         onChangeText={onChangePassword}
                        value={Password}
                        placeholder='Password'
                         placeholderTextColor='#69A09E'
                        //  secureTextEntry='true'
            >

            </TextInput>
            

            <TouchableOpacity style={styles.button}
            onPress={SignIn}
            >
            <Text style={styles.buttonText}> Sign in</Text>
             </TouchableOpacity>
              </View>
            <TouchableOpacity onPress={
              ()=>{
                navigation.navigate('Signup');
              }
            }>
              <Text style={styles.mess}> Don't have an Account? Sign up</Text>
            </TouchableOpacity>


            
         
       
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
       
    
        flex: 1,
      },
    background:{
        flex: 1,
        justifyContent  :'center'
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
      mess:{
        color: '#9FF8EF',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20,
        paddingRight:50
       
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
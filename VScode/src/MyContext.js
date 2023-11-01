import { View, Text } from 'react-native'
import React,{createContext, useContext, useState} from 'react'

const MyContext= createContext();

function AuthProvider({children}){
    const[Auth, setAuth] = useState (false);
    const Signin = ()=>{
        setAuth(true);
    }

    const value = {Auth, Signin};

    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )

};

export {MyContext, AuthProvider}

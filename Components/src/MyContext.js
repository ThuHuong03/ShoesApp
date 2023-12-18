import { View, Text } from 'react-native'
import React,{createContext, useContext, useState} from 'react'

const MyContext= createContext();

function AuthProvider({children}){
    const[Auth, setAuth] = useState (false);
    const[Type, setType] = useState ([]);
    const [HomeData, setHomeData] = useState ([]);


    const Signin = ()=>{
        setAuth(true);
    }

    const value = {Auth, Signin, Type, setType, HomeData, setHomeData};

    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )

};

export {MyContext, AuthProvider}

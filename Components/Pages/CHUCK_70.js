import React, { useContext } from 'react'
import List from './List'
import { MyContext } from '../src/MyContext'
export default function CHUCK_70() {
  const Auth= useContext(MyContext);
  const {Type}= Auth;
  const type= Type[1];
  
  return (
    <List Type={type}/>
  )
}
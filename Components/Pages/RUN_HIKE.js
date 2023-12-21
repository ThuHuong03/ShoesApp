import React, { useContext } from 'react'
import List from './List'
import { MyContext } from '../src/MyContext'
export default function RUN_HIKE() {
  const Auth= useContext(MyContext);
  const {Type}= Auth;
  const type= Type[2];
  
  return (
    <List Type={type}/>
  )
}
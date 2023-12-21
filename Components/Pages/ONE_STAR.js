import React, { useContext } from 'react'
import List from './List'
import { MyContext } from '../src/MyContext'
export default function ONE_STAR() {
  const Auth= useContext(MyContext);
  const {Type}= Auth;
  const type= Type[3];
  
  return (
    <List Type={type}/>
  )
}
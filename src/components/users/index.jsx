import React, { useEffect, useState } from 'react';
import {Routes} from 'react-router-dom'


export default function index()
{

  const [users,setUsers] = useState([]);
  const getUsers = async ()=>{
    const response = await fetch("https://crud-users-gold.vercel.app/users");
    const data = await response.jason();
    console.log(data);
  }
   useEffect(()=>{
    getUsers();
  },[]
   )
  return
  ( 
   console.log("index")
  
  )
   
 
}
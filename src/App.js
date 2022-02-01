import './App.css';
import Navbar from './Component/Navbar';
import Quora from './Component/Quora';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './featers/UserSlice';
import Login from './Component/auth/Login';
import React, { useEffect, useState } from "react";
import { auth } from './firebase';
import Todo from './Todo';
// import {selectUser} from '../src/app/Store'

function App() {
  const user =useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect (()=>{
    auth.onAuthStateChanged((authUser)=>{

    
    if(authUser){
      dispatch(login({
        uid : authUser.uid,
        photo :authUser.photoURL,
        displayName :authUser.displayName,
        email:authUser.email

      }))
      console.log(authUser)
    } else {
      dispatch(logout)
    }
  })

 
}, [dispatch]);




  return (
    <div className="App">
<Todo/>


   {
     user ? <Quora/> : <Login/>
   }

   </div>
  );
}

export default App;

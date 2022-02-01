import React from 'react'
import  { useEffect, useState } from "react";
import './App.css';



function Todo() {


    const [todo, settodo]=useState([])
const sending=()=>{
  alert(todo)

}
  return (
    
      <div className='todo'>
   <input type='text' placeholder='writesomething'  onChange={(e)=>settodo(e.target.value)}/> <button onClick={sending}>Add</button>
   <ol>
     <li>{todo}</li>
   </ol>
 </div>
    
  )
}

export default Todo

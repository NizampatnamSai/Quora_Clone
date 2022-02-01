import React from 'react'
import '../css/Quora.css'
import Feed from './Feed';
import Navbar from './Navbar';
import Post from './Post';
import Sidebar from './Sidebar';
import Widget from './Widget'
const Quora=()=>{
    return(
        <div className='quora'>
<Navbar/>

      <div className='quora__content' >
          <Sidebar/>
          <Feed/>
          <Widget/>
      </div>
        </div>
    )
}

export default Quora;
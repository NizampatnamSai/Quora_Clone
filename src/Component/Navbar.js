import React from 'react'
import '../css/Navbar.css'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon  from '@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon  from '@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleAltOutlinedIcon  from '@material-ui/icons/PeopleAltOutlined'
import NotificationsOutlinedIcon  from '@material-ui/icons/NotificationsOutlined'
import SearchIcon  from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar, Button } from '@material-ui/core'

const Navbar=()=>{
    return(
        <div className='qHeader'>
       <div className='qHeader_logo'>
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png' alt='Quora_logo'/>
       </div>
       <div className='qHeader_icons' >
          
       <div className='qHeader_icon'>
           <HomeIcon/>
       </div>
       <div className='qHeader_icon'>
           <FeaturedPlayListOutlinedIcon />
       </div>
       <div className='qHeader_icon'>
           <AssignmentTurnedInOutlinedIcon />
       </div>
       <div className='qHeader_icon'>
           <PeopleAltOutlinedIcon/>
       </div>
       <div className='qHeader_icon'>
       <NotificationsOutlinedIcon />
       </div>

       </div>
       
<div className='qHeader_input'>
    
<SearchIcon/>
<input type='text' placeholder='Search Quora'/>
</div>
<div className='qHeader_Rem'>
 <div className='qHeader_avatar'>
     <Avatar/>
 </div>
 <LanguageIcon/>
 <Button>Add Question</Button>
 </div>
        </div>
    )
}

export default Navbar;
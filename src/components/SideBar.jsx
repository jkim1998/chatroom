import React from 'react';
import Navbar from './Navbar';
import '../style.css';
import Search from './Search';
import Chats from './Chats';

function SideBar() {
  return (
    <div className='sidebar'>
        <Search /> 
        <Chats />
        <Navbar />  
    </div>
  )
}

export default SideBar
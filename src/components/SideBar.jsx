import React from 'react';
import Navbar from './Navbar';
import '../style.css';
import Search from './Search';
import Chats from './Chats';

function SideBar() {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />    
        <Chats />
    </div>
  )
}

export default SideBar
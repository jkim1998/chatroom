import React from 'react';
import '../style.css';
import PersonIcon from '@material-ui/icons/Person';
import profilepic from './profilepic.png';

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Chat</span>
      <div className='user'>
        <img src={profilepic} alt =''/>
        {/* <PersonIcon /> */}
        <span>Jonathan Kim</span>
        <button className='logout'>logout</button>
      </div>
    </div>
  )
}

export default Navbar
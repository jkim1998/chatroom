import React, { useState } from 'react';
import '../style.css';
import PersonIcon from '@material-ui/icons/Person';
import Mic from '@material-ui/icons/Mic';
// import Micoff from '@material-ui/icons/Micoff';
import Headset from '@material-ui/icons/Headset';
import Settings from '@material-ui/icons/Settings';
// import Headsetoff from '@material-ui/icons/Headsetoff';
import Person from '@material-ui/icons/Person';
import profilepic from './profilepic.png';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


function Navbar() {
  const [icon_Mute, setMute] = useState();
  const [icon_Deaf, setDeaf] = useState();

  const mute = () => {
    setMute('Person');
  }

  const deafen = () => {
    setDeaf('');
  }

  return (
    <div className='navbar'>
      <div className='user'>
        <img src={profilepic} alt =''/>
        {/* <PersonIcon /> */}
        <div className='userID'>
          <span className='ID'>Jonathan Kim</span>
          <span className='num'>#6819</span>
        </div>
        <button className='logout' onClick={() => signOut()}>logout</button>
      </div>
      <div className='mute'>
          <Mic />
          <Headset />
          <Settings />
      </div>
    </div>
  )
}

export default Navbar
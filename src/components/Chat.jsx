import React from 'react'
import Messages from './Messages';
import Input from './Input';
import '../style.css';
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Logout from '@material-ui/icons/ExitToApp';
import Group from '@material-ui/icons/Group';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Chat() {
  return (
    <div className='chat'>
        <div className="chatInfo">
          <div className="chatName">
            <Group />
            <span>Jonathan Kim</span>
          </div>
          <div className='chatIcons'>
              <PersonAddAlt1Icon />
              <Settings />
              {/* <a href="/login"><Logout /></a> */}
              <Link to="/Login" className='link'><Logout /></Link>
              <button onClick={()=>signOut(auth)}><Logout /></button>
          </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
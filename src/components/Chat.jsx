import React from 'react'
import Messages from './Messages';
import Input from './Input';
import '../style.css';
import PersonAddAlt1Icon from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Logout from '@material-ui/icons/ExitToApp';

function Chat() {
  return (
    <div className='chat'>
        <div className="chatInfo">
          <span>Jonathan Kim</span>
          <div className='chatIcons'>
              <PersonAddAlt1Icon />
              <Settings />
              <Logout />
          </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat
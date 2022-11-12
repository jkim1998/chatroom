import React from 'react'
import profilepic from './profilepic.png';
import Person from '@material-ui/icons/Person';

function Chats() {
  return (
    <div className='chats'>
        <div className='chatType'>
            <div className='type'>
                <Person />
                <span>Friends</span>
            </div>
            <div className='type'>
                <Person />
                <span>Nitro</span>
            </div>
        </div>
        <div className='DM_Container'>
            <span className='DM'>direct messages</span>
        </div>
        <div className='userChat'>
            <img src={profilepic}/>
            <div className='userChatInfo'>
                <span>Jonathan Kim</span>
            </div>
        </div>
        <div className='userChat'>
            <img src={profilepic}/>
            <div className='userChatInfo'>
                <span>Jonathan Kim</span>
            </div>
        </div>    
        <div className='userChat'>
            <img src={profilepic}/>
            <div className='userChatInfo'>
                <span>Jonathan Kim</span>
            </div>
        </div>        
    </div>
  )
}

export default Chats
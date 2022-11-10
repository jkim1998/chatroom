import React from 'react'
import profilepic from './profilepic.png';


function Chats() {
  return (
    <div className='chats'>
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
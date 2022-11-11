import React from 'react'
import profilepic from './profilepic.png';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={profilepic} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
          <p>hello</p>
          <img src={profilepic} alt="" />
      </div>
    </div>
  )
}

export default Message
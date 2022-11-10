import React from 'react'
import '../style.css'
import profilepic from './profilepic.png';

function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='search...'/>
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

export default Search
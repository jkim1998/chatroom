import React from 'react'
import '../style.css'
import profilepic from './profilepic.png';

function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <div className='searchbox'>
                <input type="text" placeholder='Find or start conversation'/>
            </div>
        </div>   
    </div>
  )
}

export default Search
import React from 'react'
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
import '../style.css';

const Home = () => {
  return (
    <div className='container'>
        <SideBar />
        <Chat />
    </div>
  )
  
}

export default Home
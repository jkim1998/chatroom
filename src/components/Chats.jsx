import React, { useContext, useEffect, useState } from "react";
import profilepic from './profilepic.png';
import Person from '@material-ui/icons/Person';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase"

const Chats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
  
    useEffect(() => {
      const getChats = () => {
        const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });
  
        return () => {
          unsub();
        };
      };
  
      currentUser.uid && getChats();
    }, [currentUser.uid]);
  
    const handleSelect = (u) => {
      dispatch({ type: "CHANGE_USER", payload: u });
    };
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
        {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats
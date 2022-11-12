import React from 'react'
import AttachFile from '@material-ui/icons/AttachFile';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Image from '@material-ui/icons/Image';
import EmojiPicker from 'emoji-picker-react';

const Input = () => {
  return (
    <div className='input'>
        <label htmlFor="file">
            <AddCircleOutlineIcon />
        </label>
        <input type="text" placeholder='Message Jonathan' />
        <div className='send'>
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
                <Image />
            </label>
            {/* <EmojiPicker /> */}
            <button>send</button>
        </div>
    </div>
  )
}

export default Input
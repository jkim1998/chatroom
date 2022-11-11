import React from 'react'
import AttachFile from '@material-ui/icons/AttachFile';
import Image from '@material-ui/icons/Image';

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Message Jonathan' />
        <div className='send'>
           <AttachFile />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
                <Image />
            </label>
            <button>send</button>
        </div>
    </div>
  )
}

export default Input
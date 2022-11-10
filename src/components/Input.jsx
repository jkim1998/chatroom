import React from 'react'

const Input = () => {
  return (
    <div className='input'>
        <input tpye="text" placeholder='Message Jonathan' />
        <div className='send'>
            <img />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
                <img />
            </label>
            <button>send</button>
        </div>
    </div>
  )
}

export default Input
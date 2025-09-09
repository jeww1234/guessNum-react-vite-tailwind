import React from 'react'

const Result = ({showmessage}) => {
  return (
    <div className='text-[white]'>
      <h3 style={{fontSize:"clamp(1em, 2vw, 1.5em)", fontFamily:"NangyangSpecial",color:"#B00000"}}>{showmessage}</h3>
    </div>
  )
}

export default Result
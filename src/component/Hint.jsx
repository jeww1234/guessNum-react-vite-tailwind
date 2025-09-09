import React from 'react'

const Hint = ({showhintmessage}) => {
  return (
    <div className='text-[white]'>
      <h3 style={{fontSize:"clamp(1em, 2vw, 1.5em)", fontFamily:"NangyangSpecial", color:"#B00000"}}>{showhintmessage}</h3>
    </div>
  )
}

export default Hint

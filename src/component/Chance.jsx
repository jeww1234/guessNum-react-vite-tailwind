import React from 'react'

const Chance = ({chance}) => {
  return (
    <div className='text-[white]'>
      <h3 style={{fontSize:"clamp(0.8em, 2vw, 1em)", fontFamily:"NangyangSpecial", color:"#B00000"}}>남은 찬스 : {chance}</h3>
    </div>
  )
}

export default Chance

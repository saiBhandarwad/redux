import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice'


export default function Bonus() {
    const points = useSelector(state=>state.bonus.points)
    const dispatch=useDispatch()
    
  return (
    <>
    <h2 className='main_heading justify_center'> Bonus Component </h2>
    <h2 className='justify_center yellow'>Total Points : {points}</h2>
    <div  className='justify_center' >
        <button onClick={()=>dispatch(increment())}> Increment +</button>
    </div>

    </>
  )
}

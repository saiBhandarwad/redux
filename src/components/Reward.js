import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/reward'
// import { increment } from '../slices/rewardSlice'
 
export default function Reward() {
    const points = useSelector(state=>state.reward.points)
    const dispatch=useDispatch()
    
  return (
    <>
    <h2 className='main_heading justify_center'> Reward Component </h2>
    <h2 className='justify_center yellow'>Total Points : {points}</h2>
    <div  className='justify_center' >
        <button onClick={()=>dispatch(increment())}> Increment +</button>
    </div>
    </>
  )
}

import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, value } from '../slices/accountSlice'

export default function Account() {

   const  amount = useSelector(state=>state.account.amount)
   const  incAmt = useSelector(state=>state.account.value)
   const dispatch = useDispatch()
   

  return (
    <>
      <h2 className='main_heading justify_center'> Account Component </h2>
        <h3 className='yellow justify_center'>Ammount: {amount}</h3>
        <div className='justify_center'>
        <button className=' mx-2' onClick={()=>dispatch(increment())}>Increment +</button>
        <button className=' mx-2' onClick={()=>dispatch(decrement())}>decrement -</button>
        <input className=' mx-2' type="number" onChange={(e)=>dispatch(value(+e.target.value))}/>
        <button className=' mx-2' onClick={()=>dispatch(incrementByAmount(incAmt))}>IncrementByAmt +{incAmt}</button>
        </div>
    </>
  )
}
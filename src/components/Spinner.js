import React from 'react'
import '../App.css'


export default function Spinner() {
  return (
    <>
    <div className="spinner-border text-danger position_center" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </>
  )
}

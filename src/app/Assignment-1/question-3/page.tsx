
"use client"
import Temperature from '@/components/Temperature'
import React, { useState } from 'react'

const HomePage = () => {
    const[message,setMessage]=useState<number>(0);
  return (
    <div>

        <input value={message} onChange={(e)=>(setMessage(Number(e.target.value))) }></input>
        <Temperature  temp={message}/>
      
    </div>
  )
}

export default HomePage

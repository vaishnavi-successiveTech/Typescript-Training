import Clock from '@/components/Clock';
import React from 'react'

const HomePage = () => {

  return (
    <div>
        <Clock timeInterface={new Date().toLocaleTimeString()}/>
    </div>
  )
}

export default HomePage;

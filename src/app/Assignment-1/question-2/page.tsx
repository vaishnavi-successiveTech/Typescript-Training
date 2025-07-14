
import UserCard from '@/components/UserCard'
import React from 'react'



const HomePage = () => {
  return (
    <div style={{display:'flex'}}>
        <UserCard name="Nayan" email="nayan@gmail.com"  avatarURL='/girl.jpg'/>
         <UserCard name="Ananaya" email="ananaya@gmail.com"  avatarURL='/girl.jpg'/>
      
    </div>
  )
}

export default HomePage

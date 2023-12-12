
import React, { useEffect, useState } from 'react'
import { useUser } from './UserContext'
const Home = () => {
  const {currentUser}=useUser();
  return (
    
    <>
      <h1>Home page</h1>
      <p>Welcome {currentUser}</p>
    </>
  )
}

export default Home
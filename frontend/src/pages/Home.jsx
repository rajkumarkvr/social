
import React from 'react'
import axios from "axios";
import { useUser } from './UserContext'
import { Link } from 'react-router-dom';
const Home = () => {
  const {currentUser}=useUser();
  
  const handleLogout=async ()=>{
    try {
       const res= await axios.get("http://localhost:3000/user/logout",{withCredentials:true})
       console.log(res.data)
        window.location.reload();
    } catch (error) {
      
    }
  }
  return (
    <>
      <h1>Home page</h1>
      <nav>
        <Link to="/contact">Contact</Link>
      </nav>
      <p>Welcome {currentUser}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home
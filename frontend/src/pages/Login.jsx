import React, {useState } from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom"
import { useUser } from "./UserContext";
const Login = () => {
  const {setCurrentUser}=useUser();
  const navigate=useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser((prevUser)=>({...prevUser,[name]:value}));
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", user,{withCredentials:true});
      setCurrentUser(response.data.res.username)
      if(response.data.status){
        navigate("/")
      }
      else{
        alert(response.data.ErrorMessage)
      }
    } catch (error) {
      console.log(error.message)
    }
  } 
  return <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email <input type="email" name="email" value={user.email} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Password <input type="password" name="password" value={user.password} onChange={handleChange} /></label>
      </div>
      <div><button>Login</button></div>
    </form>
  </div>;
};

export default Login;

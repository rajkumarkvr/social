import React, {useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:3000/user/register", user,{withCredentials:true});
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }
    setUser({
      username:"",
      email:"",
      password:""
    })
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username{" "}
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={handleInput}
          />
        </label>

        <div>
          <label>
            Email{" "}
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
            />
          </label>
        </div>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;

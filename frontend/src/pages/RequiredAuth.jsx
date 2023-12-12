import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useUser } from "./UserContext";
// Define your HOC
export const RequiredAuth = ({ children }) => {
  const navigate=useNavigate();
  const {setCurrentUser}=useUser();
      useEffect(()=>{
        const getSession=async()=>{
          try {
           const response= await axios.get("http://localhost:3000/user",{withCredentials:true})
           if(response.data.valid){
            setCurrentUser(response.data.username);
            if(children.type.name=="Login" || children.type.name=="Register"){
             navigate("/",{replace:true});
            }
          } 
          else{
            if(children.type.name=="Register"){
              navigate("/register");
             }
             else{
             navigate("/login")
             }
          }

        }catch (error) {
             console.log(error.message)
          }
       }  
       getSession();
      },[])
  return children;
};

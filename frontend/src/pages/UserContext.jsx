import { useContext,useState,createContext} from "react";
const UserContext=createContext();
export const useUser=()=>{
    return useContext(UserContext)
}
const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState("");
    return <UserContext.Provider value={{ currentUser,setCurrentUser}}>
    {children}
  </UserContext.Provider>
}

export default UserProvider
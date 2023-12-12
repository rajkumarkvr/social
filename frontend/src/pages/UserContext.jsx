import { useContext,useState,createContext} from "react";
const UserContext=createContext();
export const useUser=()=>{
    return useContext(UserContext)
}
const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState("");
    const [loading,setLoading]=useState(false);
    return<UserContext.Provider value={{ currentUser,setCurrentUser,loading,setLoading}}>
    {children}
  </UserContext.Provider>
}

export default UserProvider
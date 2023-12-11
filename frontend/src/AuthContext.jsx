import React, { useContext, createContext, useState } from "react";
const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] =useState(false)

    const login=()=>{
      setIsAuthenticated(true)
    }
    const logout=()=>{
     setIsAuthenticated(false)
    }
  return (
    <AuthContext.Provider value={{ isAuthenticated,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

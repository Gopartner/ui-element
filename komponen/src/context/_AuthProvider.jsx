// src/context/AuthProvider.js
import { createContext, useContext } from "react";
import useAuthRole from "@h/useAuthRole";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authData = useAuthRole();

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan context
export const useAuth = () => useContext(AuthContext);


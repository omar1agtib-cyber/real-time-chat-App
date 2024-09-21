import { createContext, useContext, useState } from "react";

export const AuthConetext = createContext();

export const useAuthContext = () => {
  return useContext(AuthConetext);
};

export const AuthConetextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user-info")) || null
  );
  return (
    <AuthConetext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthConetext.Provider>
  );
};

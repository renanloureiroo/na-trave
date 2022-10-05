import React, { createContext, useState } from "react";
import {
  AuthContextProviderType,
  AuthContextType,
  User,
} from "./AuthContext.props";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const [user, setUser] = useState({} as User);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

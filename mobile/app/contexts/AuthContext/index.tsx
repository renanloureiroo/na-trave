import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { AuthContextType, User, Credentials } from "./AuthContext.props";

type AuthContextProviderType = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState<User>(null);
  const [credentials, setCredentials] = useState<Credentials>(null);

  const updatedCredentials = useCallback((credentials: Credentials) => {
    setCredentials(credentials);
  }, []);

  const onSignIn = useCallback((user: User) => {
    setUser(user);
  }, []);

  useEffect(() => {
    console.log("USER", user);

    console.log("TOKENS", credentials);
  }, [user, credentials]);

  return (
    <AuthContext.Provider value={{ user, updatedCredentials, onSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

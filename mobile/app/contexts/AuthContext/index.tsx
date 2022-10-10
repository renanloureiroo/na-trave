import { useAsyncStorage } from "../../hooks/useAsyncStorage";
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

const USER_KEY = "naTrave:user";
const CREDENTIALS_KEY = "naTrave:credentials";

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState<User>(null);
  const [credentials, setCredentials] = useState<Credentials>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { getData, setData } = useAsyncStorage();

  const updatedCredentials = useCallback(async (credentials: Credentials) => {
    await setData(CREDENTIALS_KEY, credentials);
    setCredentials(credentials);
  }, []);

  const onSignIn = useCallback(async (user: User) => {
    await setData(USER_KEY, user);
    setUser(user);
  }, []);

  useEffect(() => {
    const rehydrated = async () => {
      try {
        const userData = await getData(USER_KEY);

        const credentialsData = await getData(CREDENTIALS_KEY);

        setCredentials(credentialsData);
        setUser(userData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    rehydrated();
  }, []);

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

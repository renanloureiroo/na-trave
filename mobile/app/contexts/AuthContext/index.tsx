import * as SplashScreen from "expo-splash-screen";
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
import { api } from "@services/api";

type AuthContextProviderType = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const USER_KEY = "naTrave:user";
const CREDENTIALS_KEY = "naTrave:credentials";

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState<User>(null);
  const [credentials, setCredentials] = useState<Credentials>(null);
  const [rehydrated, setRehydrate] = useState<boolean>(false);

  const { getData, setData, clear } = useAsyncStorage();

  const updatedCredentials = useCallback(async (credentials: Credentials) => {
    await setData(CREDENTIALS_KEY, credentials);
    setCredentials(credentials);
  }, []);

  const onSignIn = useCallback(async (user: User, credentials: Credentials) => {
    await setData(USER_KEY, user);
    await setData(CREDENTIALS_KEY, credentials);
    setUser(user);
    setCredentials(credentials);
  }, []);

  const onSignOut = useCallback(async () => {
    await Promise.all([clear(USER_KEY), clear(CREDENTIALS_KEY)]);

    setUser(null);
    setCredentials(null);
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
        console.log("rehydrated");
        setRehydrate(true);
      }
    };
    rehydrated();
  }, []);

  useEffect(() => {
    if (credentials) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${credentials.accessToken}`;
    }
  }, [credentials]);

  return (
    <AuthContext.Provider
      value={{ user, updatedCredentials, onSignIn, onSignOut, rehydrated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

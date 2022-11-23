export type User = {
  id: string;
  name: string;
  username: string;
};

export type Credentials = {
  accessToken: string;
  refreshToken: string;
};

export type AuthContextType = {
  user: User;
  rehydrated: boolean;
  updatedCredentials: (credentials: Credentials) => void;
  onSignIn: (user: User, credentials: Credentials) => void;
  onSignOut: () => void;
};

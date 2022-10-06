export type User = {
  id: string;
  name: string;
  username: string;
};

export type AuthContextType = {
  user: User;
};

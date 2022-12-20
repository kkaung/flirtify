export type User = {};

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  username: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  message: string;
  data: string | User;
  success: boolean;
};

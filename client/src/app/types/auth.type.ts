import { Photo } from './photo.type';

export type User = {
  id: number;
  username: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  createdAt: string;
  updatedAt: string;
  lastActive: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
};

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

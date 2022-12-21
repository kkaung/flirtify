import { User } from './auth.type';

export type UserResponse = {
  message: string;
  data: User[];
  success: boolean;
};

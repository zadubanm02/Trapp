import { User } from "firebase/auth";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  LoginData,
  loginWithEmail,
  logout,
  RegisterData,
  registerWithEmail,
} from "../firebase/auth";
import { authAtom } from "../state/auth";

export const useAuth = async () => {
  const [user, setUser] = useAtom(authAtom);
  const [error, setError] = useState<unknown | null>(null);

  const login = async (user: LoginData): Promise<void> => {
    try {
      const result = await loginWithEmail(user);
      setUser(result);
    } catch (err) {
      setError(err);
    }
  };

  const register = async (user: RegisterData): Promise<void> => {
    try {
      const result = await registerWithEmail(user);
      setUser(result);
    } catch (err) {
      setError(err);
    }
  };

  const logOut = () => {
    logout();
  };

  return {
    user,
    error,
    login,
    register,
    logOut,
  };
};

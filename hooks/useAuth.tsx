import { User } from "firebase/auth";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import {
  LoginData,
  loginWithEmail,
  logout,
  RegisterData,
  registerWithEmail,
  loginWithGoogle,
  registerWithGoogle,
  registerWithFacebook,
} from "../firebase/auth";
import { authAtom } from "../state/auth";

export const useAuth = () => {
  const [user, setUser] = useAtom(authAtom);
  const [error, setError] = useState<unknown | null>(null);
  const router = useRouter();

  const login = useCallback(
    async (user: LoginData): Promise<void> => {
      try {
        const result = await loginWithEmail(user);
        setUser(result);
      } catch (err) {
        setError(err);
      }
    },
    [setUser]
  );

  const registerWithGoogleProvider = useCallback(async (): Promise<void> => {
    try {
      const result = await registerWithGoogle();
      setUser(result);
    } catch (err) {
      setError(err);
    }
  }, [setUser]);

  const registerWithFacebookProvider = useCallback(async (): Promise<void> => {
    try {
      const result = await registerWithFacebook();
      setUser(result);
    } catch (err) {
      setError(err);
    }
  }, [setUser]);

  const loginWithGoogleProvider = useCallback(async (): Promise<void> => {
    try {
      const result = await loginWithGoogle();
      setUser(result);
    } catch (err) {
      setError(err);
    }
  }, [setUser]);

  const register = useCallback(
    async (user: RegisterData): Promise<void> => {
      try {
        const result = await registerWithEmail(user);
        setUser(result);
      } catch (err) {
        setError(err);
      }
    },
    [setUser]
  );

  const logOut = useCallback(() => {
    logout();
    setUser(null);
    router.push("/login");
  }, [setUser]);

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  return {
    user,
    error,
    login,
    register,
    loginWithGoogleProvider,
    registerWithGoogleProvider,
    registerWithFacebookProvider,
    logOut,
  };
};

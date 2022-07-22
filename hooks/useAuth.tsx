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
} from "../firebase/auth";
import { authAtom } from "../state/auth";

export const useAuth = () => {
  const [user, setUser] = useAtom(authAtom);
  const [error, setError] = useState<unknown | null>(null);
  const router = useRouter();
  const { pathname } = router;

  const notLoggedRoutes = ["register", "login"];

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
      console.log("USER", user, router);
      router.push("/home");
    }
  }, [user]);

  return {
    user,
    error,
    login,
    register,
    logOut,
  };
};

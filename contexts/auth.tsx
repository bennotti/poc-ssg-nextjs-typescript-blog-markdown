import React, { ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  authenticateAPI,
  unauthenticateAPI,
} from "@services/authSevice";
import { useRouter } from "next/router";
import { NextPage } from "next";

type User = {
  nome: string;
} | null;

type CustomElement = ReactElement & {
  requiresAuth?: boolean;
  redirectUnauthenticatedTo?: string;
};

const AuthContext = React.createContext(
  {} as {
    user: User;
    authenticate: (newToken: string) => Promise<void>;
    logout: ({ redirectLocation }: { redirectLocation: string }) => void;
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string;
  }
);

export const AuthProvider = ({ children }: { children: ReactElement<CustomElement> }) => {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = !!user;

  const logout = ({ redirectLocation }: { redirectLocation: string }) => {
    Cookies.remove("token");
    unauthenticateAPI();
    setUser(null);
    setIsLoading(false);
    console.log("Redirecting");
    router.push(redirectLocation || "/login");
  };

  const authenticate = async (token: string) => {
    setIsLoading(true);
    authenticateAPI(token);
    try {
      setUser({ nome: 'temp' });
      Cookies.set("token", token);
    } catch (error) {
      console.log({ error });
      unauthenticateAPI();
      setUser(null);
      Cookies.remove("token");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;
    authenticate(token);
  }, []);

  useEffect(() => {
    const Component: any = children?.type;

    // If it doesn't require auth, everything's good.
    if (!Component.requiresAuth) return;

    // If we're already authenticated, everything's good.
    if (isAuthenticated) return;

    // If we don't have a token in the cookies, logout
    const token = Cookies.get("token");
    if (!token) {
      return logout({ redirectLocation: Component.redirectUnauthenticatedTo });
    }

    // If we're not loading give the try to authenticate with the given token.
    if (!isLoading) {
      authenticate(token);
    }
  }, [isLoading, isAuthenticated, (children.type as any).requiresAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        logout,
        isLoading,
        isAuthenticated: !!user,
        token: Cookies.get("token"),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
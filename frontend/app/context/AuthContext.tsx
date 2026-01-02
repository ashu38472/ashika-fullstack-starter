"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

const AUTH_TOKEN_KEY = "ashika_auth_token";
const AUTH_USER_KEY = "ashika_auth_user";
const REFRESH_TOKEN_KEY = "ashika_refresh_token";

interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: string[];
  districtId: string;
  accessibleModules?: string[];
  designationId?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, refreshToken: string, userData: AuthUser) => void;
  logout: () => void;
  updateAuthUser: (newUserData: AuthUser) => void;
  userPermissions: string[];
  hasPermission: (permissionName: string) => boolean;
  hasRole: (roleName: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const storedUserJSON = localStorage.getItem(AUTH_USER_KEY);

    let storedUser: AuthUser | null = null;

    if (storedUserJSON) {
      try {
        storedUser = JSON.parse(storedUserJSON);
      } catch (error) {
        console.error("Failed to parse auth user from localStorage:", error);
        localStorage.removeItem(AUTH_USER_KEY);
      }
    }

    if (storedToken && storedUser) {
      setToken(storedToken);
      setRefreshToken(storedRefreshToken || null);
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (
    newToken: string,
    newRefreshToken: string,
    userData: AuthUser
  ) => {
    localStorage.setItem(AUTH_TOKEN_KEY, newToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));

    setToken(newToken);
    setRefreshToken(newRefreshToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);

    setToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  const updateAuthUser = (newUserData: AuthUser) => {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(newUserData));
    setUser(newUserData);
  };

  const value = useMemo(
    () => ({
      user,
      token,
      refreshToken,
      isLoading,
      isAuthenticated: !!user,
      userPermissions: user?.permissions ?? [],
      hasPermission: (permission: string) =>
        user?.permissions?.includes(permission) ?? false,
      hasRole: (roleName: string) => user?.role === roleName,
      login,
      logout,
      updateAuthUser,
    }),
    [user, token, refreshToken, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

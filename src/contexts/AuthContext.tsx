import { createContext, ReactNode } from "react";

interface AuthContextType {}

export const AuthContext = createContext({} as any);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

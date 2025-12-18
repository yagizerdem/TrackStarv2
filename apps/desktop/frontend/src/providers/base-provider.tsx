import { createContext, useContext, type ReactNode } from "react";
import { AppProvider } from "./app-context";
import { ThemeProvider } from "./theme-provider";

interface BaseProviderProps {
  children: ReactNode;
}

const BaseContext = createContext<null>(null);

export function BaseProvider({ children }: BaseProviderProps) {
  return (
    <BaseContext.Provider value={null}>
      <AppProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AppProvider>
    </BaseContext.Provider>
  );
}

export function useBase() {
  const ctx = useContext(BaseContext);
  if (!ctx) {
    throw new Error("useBase must be used inside <BaseProvider>");
  }
  return ctx;
}

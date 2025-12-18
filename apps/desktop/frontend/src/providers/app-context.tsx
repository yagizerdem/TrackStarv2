import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextValue {
  showLoadingSpinner: boolean;
  setShowLoadingSpinner: (value: boolean) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: AppProviderProps) {
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  const value: AppContextValue = {
    showLoadingSpinner,
    setShowLoadingSpinner,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used inside <AppProvider>");
  }
  return ctx;
}

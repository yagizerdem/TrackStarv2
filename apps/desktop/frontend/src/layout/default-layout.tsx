import { useEffect, type ReactNode } from "react";
import { Frame } from "../components/layout/common/frame";
import { useTheme } from "../providers/theme-provider";
import { Header } from "../components/layout/common/header";

interface DefaultLayoutProps {
  children?: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Frame />
      <Header />
      <div className="flex-1 overflow-hidden bg-background">{children}</div>
    </div>
  );
}

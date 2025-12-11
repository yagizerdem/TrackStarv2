import { type ReactNode } from "react";
import { Frame } from "../components/layout/common/frame";

interface DefaultLayoutProps {
  children?: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Frame />
      <div className="flex-1 overflow-hidden bg-background">{children}</div>
    </div>
  );
}

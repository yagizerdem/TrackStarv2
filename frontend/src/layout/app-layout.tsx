import { type ReactNode } from "react";
import { HorizontalSplitPane } from "../components/ui/horizontal-splitpane";
import { NavigationManager } from "../components/layout/app/navigation-manager";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row text-foreground ">
      <HorizontalSplitPane
        leftPanelMinSize={100}
        leftPanelMaxSize={200}
        leftPanelInitialSize={200}
        leftChildren={<NavigationManager />}
        rightChildren={
          <div className="w-full h-full bg-secondary rounded-sm">
            {children}
          </div>
        }
      ></HorizontalSplitPane>
    </div>
  );
}

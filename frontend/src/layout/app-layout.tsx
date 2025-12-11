import { type ReactNode } from "react";
import { HorizontalSplitPane } from "../components/ui/horizontal-splitpane";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row text-foreground ">
      <HorizontalSplitPane
        leftPanelMinSize={200}
        leftPanelMaxSize={400}
        leftPanelInitialSize={300}
        leftChildren={<div className="w-full h-full bg-background">left</div>}
        rightChildren={
          <div className="w-full h-full bg-secondary rounded-sm">
            {children}
          </div>
        }
      ></HorizontalSplitPane>
    </div>
  );
}

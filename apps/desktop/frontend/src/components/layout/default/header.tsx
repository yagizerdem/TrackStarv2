import { MoonIcon, SunIcon } from "lucide-react";
import { Label } from "../../ui/label";
import { Switch } from "../../ui/switch";
import { useTheme } from "../../../providers/theme-provider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "../../../lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const moonRef = useRef(null);
  const sunRef = useRef(null);
  const container = useRef(null);

  function onChecked(flag: boolean) {
    setTheme(flag ? "dark" : "light");
  }

  useGSAP(
    () => {
      if (theme === "dark") {
        gsap.fromTo(
          moonRef.current,
          {
            rotation: 180,
            duration: 0.5,
            ease: "power2.out",
          },
          {
            rotation: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
      if (theme === "light") {
        gsap.to(sunRef.current, {
          rotation: 100,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [theme], scope: container, revertOnUpdate: true }
  );

  return (
    <div
      className="w-full h-8 bg-background flex items-center justify-between px-4 text-foreground"
      ref={container}
    >
      <Label className="font-bold text-xl">Track Star</Label>
      <div>
        <div className="flex flex-row items-center gap-2 ">
          <Switch
            id="airplane-mode"
            onCheckedChange={(flag) => onChecked(flag)}
            checked={theme === "dark"}
            className="cursor-pointer"
          />
          <div className="relative w-5 h-5 z-1">
            <MoonIcon
              className={cn(
                "text-foreground cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 select-none",
                theme === "dark"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0  pointer-events-none"
              )}
              ref={moonRef}
              onMouseUp={() => setTheme("light")}
            />
            <SunIcon
              className={cn(
                "text-foreground cursor-pointer  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 select-none",
                theme === "light"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0  pointer-events-none"
              )}
              ref={sunRef}
              onMouseUp={() => setTheme("dark")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

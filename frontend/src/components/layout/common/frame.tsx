import { Button } from "../../ui/button";
import "./native-navigation.css";
import { X, Minus, Maximize } from "lucide-react";
import trackStarIcon from "../../../assets/trackStarIcon.png";

export function Frame() {
  function minimizeWindow() {
    window.windowController.minimize();
  }

  function maximizeWindow() {
    window.windowController.maximize();
  }

  function closeWindow() {
    window.windowController.close();
  }

  return (
    <div className="w-full h-12 bg-card drag-area cursor-pointer flex items-center justify-between px-4">
      <div>
        <img src={trackStarIcon} alt="TrackStar Icon" className="w-6 h-6" />
      </div>
      <div className="flex flex-row gap-2">
        <Button
          className="cursor-pointer no-drag-area w-6 h-8 "
          variant={"outline"}
          onMouseUp={() => minimizeWindow()}
        >
          <Minus />
        </Button>
        <Button
          className="cursor-pointer no-drag-area w-6 h-8"
          variant={"outline"}
          onMouseUp={() => maximizeWindow()}
        >
          <Maximize />
        </Button>
        <Button
          className="cursor-pointer no-drag-area w-6 h-8"
          variant={"destructive"}
          onMouseUp={() => closeWindow()}
        >
          <X />
        </Button>
      </div>
    </div>
  );
}

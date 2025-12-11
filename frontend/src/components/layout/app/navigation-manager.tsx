import { Label } from "@radix-ui/react-label";
import { Button } from "../../ui/button";
import { DownloadIcon, SettingsIcon, UploadIcon } from "lucide-react";

export function NavigationManager() {
  return (
    <div className="w-full h-full flex flex-col bg-background  overflow-hidden">
      <div className=" flex-1 flex-col bg-background  overflow-y-auto">
        <div className="w-full h-8 px-3 mt-5">
          <Button
            variant={"ghost"}
            className=" w-full h-full bg-secondary cursor-pointer rounded-md "
          >
            <Label className="font-bold text-md">Home</Label>
          </Button>
        </div>
        <div className="w-full h-8 px-3 mt-3">
          <Button
            variant={"ghost"}
            className=" w-full h-full bg-secondary cursor-pointer rounded-md "
          >
            <Label className="font-bold text-md">Search</Label>
          </Button>
        </div>
        <div className="w-full h-8 px-3 mt-3">
          <Button
            variant={"ghost"}
            className=" w-full h-full bg-secondary cursor-pointer rounded-md "
          >
            <Label className="font-bold text-md">Watch List</Label>
          </Button>
        </div>
        <div className="w-full h-8 px-3 mt-3">
          <Button
            variant={"ghost"}
            className=" w-full h-full bg-secondary cursor-pointer rounded-md "
          >
            <Label className="font-bold text-md">Account</Label>
          </Button>
        </div>
      </div>
      <footer className="w-full h-12 mt-2  flex flex-row items-center justify-between">
        <div className="mx-4 gap-2">
          <Button
            variant={"ghost"}
            className=" rounded-md w-6 h-6 cursor-pointer"
          >
            <DownloadIcon />
          </Button>
          <Button
            variant={"ghost"}
            className=" rounded-md w-6 h-6 cursor-pointer"
          >
            <UploadIcon />
          </Button>
        </div>
        <Button
          variant={"ghost"}
          className=" rounded-md w-6 h-6 cursor-pointer"
        >
          <SettingsIcon />
        </Button>
      </footer>
    </div>
  );
}

import { Fragment } from "react/jsx-runtime";
import { useApp } from "../../providers/app-context";
import { Spinner } from "../ui/spinner";

export function LoaderPanel() {
  const { showLoadingSpinner } = useApp();

  if (showLoadingSpinner) {
    return (
      <div className="w-full h-full absolute top-0 left-0 z-50 flex justify-center items-center">
        <div className="w-full h-full bg-black opacity-90 z-51 absolute top-0 left-0" />
        <Spinner className="z-52 text-white w-10 h-10" />
      </div>
    );
  } else return <Fragment />;
}

import { DefaultLayout } from "../layout/default-layout";

export function HomePage() {
  return (
    <DefaultLayout>
      <div className="w-full h-full  overflow-auto ">
        <div className="h-999 w-full  "></div>
      </div>
    </DefaultLayout>
  );
}

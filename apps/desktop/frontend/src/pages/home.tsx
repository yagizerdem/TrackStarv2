import { AppLayout } from "../layout/app-layout";
import { DefaultLayout } from "../layout/default-layout";

export function HomePage() {
  return (
    <DefaultLayout>
      <AppLayout>
        <div>hoem </div>
      </AppLayout>
    </DefaultLayout>
  );
}

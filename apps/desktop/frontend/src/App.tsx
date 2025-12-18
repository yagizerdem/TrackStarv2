import { RouterProvider } from "react-router/dom";
import { router } from "./router";
import { BaseProvider } from "./providers/base-provider";

function App() {
  return (
    <BaseProvider>
      <RouterProvider router={router} />
    </BaseProvider>
  );
}

export default App;

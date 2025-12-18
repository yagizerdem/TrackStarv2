import { CreateAccount } from "../components/account/create-account";
import { LoginAccount } from "../components/account/login-account";
import { AppLayout } from "../layout/app-layout";
import { DefaultLayout } from "../layout/default-layout";

export function AccountPage() {
  return (
    <DefaultLayout>
      <AppLayout>
        <ul>
          <li>
            <CreateAccount />
          </li>
          <hr />
          <li>
            <LoginAccount />
          </li>
        </ul>
      </AppLayout>
    </DefaultLayout>
  );
}

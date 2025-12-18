import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../components/ui/item";
import { useApp } from "../../providers/app-context";
import { Button } from "../ui/button";

export function CreateAccount() {
  const { setShowLoadingSpinner } = useApp();
  async function handleCreateAccount() {
    try {
      setShowLoadingSpinner(true);
      await window.accountController.createAccount();
    } finally {
      setShowLoadingSpinner(false);
    }
  }

  return (
    <Item>
      <ItemContent>
        <ItemTitle>Create Account</ItemTitle>
        <ItemDescription>
          Create TMDB account to access personalized features.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onMouseUp={() => handleCreateAccount()}
        >
          Open
        </Button>
      </ItemActions>
    </Item>
  );
}

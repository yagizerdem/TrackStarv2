import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "../../components/ui/item";
import { Button } from "../ui/button";

export function LoginAccount() {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>Login Account</ItemTitle>
        <ItemDescription>
          Login to your TMDB account to access personalized features.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm" className="cursor-pointer">
          Open
        </Button>
      </ItemActions>
    </Item>
  );
}

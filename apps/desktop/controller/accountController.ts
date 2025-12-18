import open from "open";

export async function createAccount() {
  const url = "https://www.themoviedb.org/signup";
  await open(url);
}

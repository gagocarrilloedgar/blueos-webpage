import { Button } from "./ui/button";

export const SignInWithGoogle = () => {
  const signIn = () => console.log("");
  return (
    <Button variant="outline" onClick={signIn} className="w-full">
      Login with Google
    </Button>
  );
};

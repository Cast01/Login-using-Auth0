import { useAuth0 } from "@auth0/auth0-react";

export function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <LoginButton />
    </div>
  );
}

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

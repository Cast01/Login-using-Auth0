import { useAuth0 } from "@auth0/auth0-react";

export function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      ) : (
        <h1>PROFILE</h1>
      )}
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-b4-laqv6.us.auth0.com"
        clientId="FXJkNLbpP1gRMRsbNIgXnbaFZ6hamfw9"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

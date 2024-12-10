import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";
import "./index.css";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_IrxD2kgp0",
  client_id: "67p4qceb57t0kb3sbjsfgh3fm6",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "openid profile email",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider {...cognitoAuthConfig}>
    <App />
  </AuthProvider>
);
import AuthEntity from "./auth.entity";
import AuthResponse from "./auth.response";

interface IPieFiConnectAuth {
  connect: (auth: AuthEntity) => Promise<AuthResponse>
}

export default IPieFiConnectAuth;
import AuthEntity from "./auth.entity";
import AuthResponse from "./auth.response";

interface IAwsmConnectAuth {
  connect: (auth: AuthEntity) => Promise<AuthResponse>
}

export default IAwsmConnectAuth;
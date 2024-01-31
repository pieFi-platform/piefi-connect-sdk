import AuthEntity from "./auth.entity";
import AuthResponse from "./auth.response";
import UserResponse from "./user.response";

interface IConnectUser {
  connect: (auth: AuthEntity) => Promise<AuthResponse>;
  getByExternalId(externalId: string): Promise<UserResponse | undefined>
}

export default IConnectUser;
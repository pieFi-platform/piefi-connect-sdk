import IHttpConfig from "../http/http.config.interface";
import AuthEntity from "./entities/auth.entity";
import IConnectUser from "./entities/user.module.interface";
import AuthResponse from "./entities/auth.response";
import UserResponse from "./entities/user.response";

class AwsmConnectUser implements IConnectUser {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }

  public async connect(auth: AuthEntity): Promise<AuthResponse> {
    const result: AuthResponse = await this.httpModule.post<AuthResponse>('users', auth);
    return result;
  }

  public async getByExternalId(externalId: string): Promise<UserResponse | undefined> {
    const result = await this.httpModule.get<UserResponse | undefined>(`users/${externalId}`);
    return result;
  }
}

export default AwsmConnectUser;
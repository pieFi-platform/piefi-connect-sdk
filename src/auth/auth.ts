import IHttpConfig from "../http/http.config.interface";
import AuthEntity from "./entities/auth.entity";
import IAwsmConnectAuth from "./entities/auth.module.interface";
import AuthResponse from "./entities/auth.response";

class PieFiConnectAuth implements IAwsmConnectAuth {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }

  public async connect(auth: AuthEntity): Promise<AuthResponse> {
    const result: AuthResponse = await this.httpModule.post<AuthResponse>('users', auth);
    return result;
  }
}

export default PieFiConnectAuth;
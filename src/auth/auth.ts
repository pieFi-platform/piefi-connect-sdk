import HttpConfig from "../http/http.config";
import AuthEntity from "./entities/auth.entity";
import AuthResponse from "./entities/auth.response";

class PieFiConnectAuth {
  private httpModule: HttpConfig;
  constructor(httpModule: HttpConfig){
    this.httpModule = httpModule;
  }

  public async connect(auth: AuthEntity): Promise<AuthResponse> {
    const result = await this.httpModule.post<AuthResponse>('users', auth);
    return result;
  }
}

export default PieFiConnectAuth;
import { randomUUID } from "crypto";
import IHttpConfig from "../http/http.config.interface";
import AuthEntity from "./entities/auth.entity";
import IPieFiConnectAuth from "./entities/auth.module.interface";
import AuthResponse from "./entities/auth.response";

class MockPieFiConnectAuth implements IPieFiConnectAuth {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }

  public async connect(auth: AuthEntity): Promise<AuthResponse> {
    return new Promise((res, rej) => {
      res({
        userId: randomUUID()
      })
    })
  }
}

export default MockPieFiConnectAuth;
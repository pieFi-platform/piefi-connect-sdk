import HttpConfig from "../http/http.config";
import IHttpConfig from "../http/http.config.interface";
import ConfigOptions from "../models/config-options.interface";
import { BitEvent, BitResponse, ConnectPointEvent, MockConnectPointEvent } from "../point-event";
import IConnectPointEvent from "../point-event/entities/point-event.module.interface";
import { AuthEntity, AuthResponse, ConnectUser, MockConnectUser } from "../user";
import IConnectUser from "../user/entities/user.module.interface";

class AwsmConnect {
  private apiKey: string;
  private companyId: string;
  private httpModule: IHttpConfig;
  public user: IConnectUser;
  public allocation: IConnectPointEvent;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId, options?.environment);
    this.user = options?.testMode ? new MockConnectUser(this.httpModule) : new ConnectUser(this.httpModule)
    this.allocation =  options?.testMode ? new MockConnectPointEvent(this.httpModule) : new ConnectPointEvent(this.httpModule)
  }
}

export default AwsmConnect;
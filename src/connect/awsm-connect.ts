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
  private authModule: IConnectUser;
  private pointModule: IConnectPointEvent;
  private httpModule: IHttpConfig;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId, options?.environment);
    this.authModule = options?.testMode ? new MockConnectUser(this.httpModule) : new ConnectUser(this.httpModule)
    this.pointModule =  options?.testMode ? new MockConnectPointEvent(this.httpModule) : new ConnectPointEvent(this.httpModule)
  }

  /**
   * @description Performs the following:
   *  1. Puts the user inside the company COOP
   * 
   * @param auth {@link AuthEntity}
   * @returns {link AuthResponse}
   */
  async userConnect(authEntity: AuthEntity): Promise<AuthResponse> {
    const authResponse = await this.authModule.connect(authEntity)

    return authResponse;
  }

  /**
   * @description Rewards points to the dao membership
   * @param data {@link BitEvent}
   * @returns {Promise<BitResponse>}
   */
  async distributePoints(data: BitEvent): Promise<BitResponse> {
    const pointResponse = await this.pointModule.rewardPoints(data);

    return pointResponse;
  }
}

export default AwsmConnect;
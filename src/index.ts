import { AuthEntity, AuthResponse, MockPieFiConnectAuth, PieFiConnectAuth } from './auth';
import IAwsmConnectAuth from './auth/entities/auth.module.interface';
import HttpConfig from './http/http.config';
import IHttpConfig from './http/http.config.interface';
import ConfigOptions from './models/config-options.interface';
import { MockPieFiConnectPointEvent, PieFiConnectPointEvent, BitEvent, BitResponse } from './point-event';
import IAwsmConnectPointEvent from './point-event/entities/point-event.module.interface';



class AwsmConnect {
  private apiKey: string;
  private companyId: string;
  private authModule: IAwsmConnectAuth;
  private pointModule: IAwsmConnectPointEvent;
  private httpModule: IHttpConfig;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId, options?.environment);
    this.authModule = options?.testMode ? new MockPieFiConnectAuth(this.httpModule) : new PieFiConnectAuth(this.httpModule)
    this.pointModule =  options?.testMode ? new MockPieFiConnectPointEvent(this.httpModule) : new PieFiConnectPointEvent(this.httpModule)
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
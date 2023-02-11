import { AuthEntity, AuthResponse, MockPieFiConnectAuth, PieFiConnectAuth } from './auth';
import IPieFiConnectAuth from './auth/entities/auth.module.interface';
import HttpConfig from './http/http.config';
import IHttpConfig from './http/http.config.interface';
import ConfigOptions from './models/config-options.interface';
import { MockPieFiConnectPointEvent, PieFiConnectPointEvent, PointEvent, PointResponse } from './point-event';
import IPieFiConnectPointEvent from './point-event/entities/point-event.module.interface';



class PieFiConnect {
  private apiKey: string;
  private companyId: string;
  private authModule: IPieFiConnectAuth;
  private pointModule: IPieFiConnectPointEvent;
  private httpModule: IHttpConfig;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId);
    this.authModule = options?.testMode ? new MockPieFiConnectAuth(this.httpModule) : new PieFiConnectAuth(this.httpModule)
    this.pointModule =  options?.testMode ? new MockPieFiConnectPointEvent(this.httpModule) : new PieFiConnectPointEvent(this.httpModule)
  }


    /**
   * @description Performs the following:
   *  1. Creates user in UpsideCOOP
   *  2. Puts the user inside the company COOP
   *  3. Puts the user inside the company COOP's main room
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
   * @param data {@link PointEvent}
   * @returns {Promise<PointResponse>}
   */
  async distributePoints(data: PointEvent): Promise<PointResponse> {
    const pointResponse = await this.pointModule.rewardPoints(data);

    return pointResponse;
  }
}

export default PieFiConnect;
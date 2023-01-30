import 'dotenv/config';
import { AuthEntity, AuthResponse, PieFiConnectAuth } from './auth';
import PieFiConnectEnv from './http/environments';
import HttpConfig from './http/http.config';
import { PieFiConnectPointEvent, PointEvent, PointResponse } from './point-event';

interface ConfigOptions {
  environment: PieFiConnectEnv;
}

class PieFiConnect {
  private apiKey: string;
  private companyId: string;
  private authModule: PieFiConnectAuth;
  private pointModule: PieFiConnectPointEvent;
  private httpModule: HttpConfig;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId, options?.environment);
    this.authModule = new PieFiConnectAuth(this.httpModule)
    this.pointModule = new PieFiConnectPointEvent(this.httpModule)
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
   * @returns {@link PointResponse}
   */
  async distributePoints(data: PointEvent): Promise<PointResponse> {
    const pointResponse = await this.pointModule.rewardPoints(data);

    return pointResponse;
  }
}

export default PieFiConnect;
import 'dotenv/config';
import PieFiConnectAuth from './src/auth/auth'
import PieFiConnectPointEvent from './src/point-event/point-event'
import HttpConfig from './src/http/http.config'
import AuthEntity from './src/auth/entities/auth.entity';
import AuthResponse from './src/auth/entities/auth.response';
import PointEvent from './src/point-event/entities/point-event';

interface ConfigOptions {
  testMode: boolean;
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
    this.httpModule = new HttpConfig(this.apiKey, this.companyId);
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

  async distributePoints(data: PointEvent) {
    const pointResponse = await this.pointModule.rewardPoints(data);
    return pointResponse;
  }
}

export default PieFiConnect;
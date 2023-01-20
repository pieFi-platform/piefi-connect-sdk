import 'dotenv/config';
import PieFiConnectAuth from './src/auth/auth'
import HttpConfig from './src/http/http.config'
import AuthEntity from './src/auth/entities/auth.entity';
import AuthResponse from './src/auth/entities/auth.response';

interface ConfigOptions {
  testMode: boolean;
}

class PieFiConnect {
  private apiKey: string;
  private companyId: string;
  private authModule: PieFiConnectAuth;
  private httpModule: HttpConfig;

  constructor(apiKey: string, companyId: string, options?: ConfigOptions) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.httpModule = new HttpConfig(this.apiKey, this.companyId);
    this.authModule = new PieFiConnectAuth(this.httpModule)
  }


  async userConnect(authEntity: AuthEntity): Promise<AuthResponse> {
    const authResponse = await this.authModule.connect(authEntity)

    return authResponse;
  }
}

export default PieFiConnect;
import IHttpConfig from "../http/http.config.interface";
import BitEvent from "./entities/point-event";
import BitResponse from "./entities/point-response";

class PieFiConnectPointEvent {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }

  public async rewardPoints(data: BitEvent) {
    const result = await this.httpModule.post<BitResponse>('points', data);
    return result;
  }
}

export default PieFiConnectPointEvent;
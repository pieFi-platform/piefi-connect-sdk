import HttpConfig from "../http/http.config";
import PointEvent from "./entities/point-event";

class PieFiConnectPointEvent {
  private httpModule: HttpConfig;
  constructor(httpModule: HttpConfig){
    this.httpModule = httpModule;
  }

  public async rewardPoints(data: PointEvent) {
    const result = await this.httpModule.post('points', data);
    return result;
  }
}

export default PieFiConnectPointEvent;
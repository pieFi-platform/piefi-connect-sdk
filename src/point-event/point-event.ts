import IHttpConfig from "../http/http.config.interface";
import PointEvent from "./entities/point-event";
import PointResponse from "./entities/point-response";

class PieFiConnectPointEvent {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig){
    this.httpModule = httpModule;
  }

  public async rewardPoints(data: PointEvent) {
    const result = await this.httpModule.post<PointResponse>('points', data);
    return result;
  }
}

export default PieFiConnectPointEvent;
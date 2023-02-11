import { randomUUID } from "crypto";
import IHttpConfig from "../http/http.config.interface";
import PointEvent from "./entities/point-event";
import IPieFiConnectPointEvent from "./entities/point-event.module.interface";
import PointResponse from "./entities/point-response";


class MockPieFiConnectPointEvent implements IPieFiConnectPointEvent {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig) {
    this.httpModule = httpModule;
  }

  public async rewardPoints(data: PointEvent): Promise<PointResponse> {
    return new Promise((res, rej) => {
      res({
        dateQueue: new Date(),
        recipientUserId: randomUUID(),
        linkedIds: {
          patronageActivityId: data.eventId
        }
      })
    })
  }
}

export default MockPieFiConnectPointEvent;
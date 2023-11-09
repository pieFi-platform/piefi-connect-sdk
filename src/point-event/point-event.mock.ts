import { randomUUID } from "crypto";
import IHttpConfig from "../http/http.config.interface";
import BitEvent from "./entities/point-event";
import IAwsmConnectPointEvent from "./entities/point-event.module.interface";
import BitResponse from "./entities/point-response";


class MockPieFiConnectPointEvent implements IAwsmConnectPointEvent {
  private httpModule: IHttpConfig;
  constructor(httpModule: IHttpConfig) {
    this.httpModule = httpModule;
  }

  public async rewardPoints(data: BitEvent): Promise<BitResponse> {
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
import BitEvent from "./point-event";
import BitResponse from "./point-response";

interface IConnectPointEvent {
  rewardPoints: (data: BitEvent) => Promise<BitResponse>
}

export default IConnectPointEvent;
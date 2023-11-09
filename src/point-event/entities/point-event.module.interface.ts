import BitEvent from "./point-event";
import BitResponse from "./point-response";

interface IAwsmConnectPointEvent {
  rewardPoints: (data: BitEvent) => Promise<BitResponse>
}

export default IAwsmConnectPointEvent;
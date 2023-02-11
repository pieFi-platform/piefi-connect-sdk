import PointEvent from "./point-event";
import PointResponse from "./point-response";

interface IPieFiConnectPointEvent {
  rewardPoints: (data: PointEvent) => Promise<PointResponse>
}

export default IPieFiConnectPointEvent;
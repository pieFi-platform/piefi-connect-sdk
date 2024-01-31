import BitEvent from "./point-event";
import BitResponse from "./point-response";

interface IConnectPointEvent {
  create: (data: BitEvent) => Promise<BitResponse>
}

export default IConnectPointEvent;
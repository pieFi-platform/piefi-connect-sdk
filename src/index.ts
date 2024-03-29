import AwsmConnect from "./connect/awsm-connect";
import ConfigOptions from "./models/config-options.interface";
import ConnectEnvironment from "./models/environments.enum";
import { BitEvent, BitResponse } from "./point-event";
import { AuthResponse } from "./user";
import UserResponse from "./user/entities/user.response";

export type {
  ConfigOptions,
  BitEvent,
  BitResponse,
  AuthResponse,
  UserResponse
}

export {
  ConnectEnvironment
}

export default AwsmConnect;

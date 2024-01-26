import AwsmConnect from './src';
import { AuthEntity, AuthResponse } from './src/auth';
import PieFiConnectEnvironment from './src/models/environments.enum';
import { BitEvent, BitResponse } from './src/point-event';

export default AwsmConnect;

export type {
  AuthEntity,
  AuthResponse, BitEvent,
  BitResponse, PieFiConnectEnvironment
};

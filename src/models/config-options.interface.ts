import PieFiConnectEnvironment from "./environments.enum";

interface ConfigOptions {
  testMode?: boolean;
  environment?: PieFiConnectEnvironment;
}

export default ConfigOptions;
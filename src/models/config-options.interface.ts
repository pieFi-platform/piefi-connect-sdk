import AwsmConnectEnvironment from "./environments.enum";

interface ConfigOptions {
  testMode?: boolean;
  environment?: AwsmConnectEnvironment;
}

export default ConfigOptions;
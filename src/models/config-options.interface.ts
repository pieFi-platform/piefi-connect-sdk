import ConnectEnvironment from "./environments.enum";

interface ConfigOptions {
  testMode?: boolean;
  environment?: ConnectEnvironment;
}

export default ConfigOptions;
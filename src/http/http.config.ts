import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import PieFiConnectEnv from "./environments";

class HttpConfig {
  private apiKey: string;
  private companyId: string;
  private axiosInstance: AxiosInstance;

  constructor(apiKey: string, companyId: string, env = PieFiConnectEnv.local) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.axiosInstance = axios.create({
      baseURL: env,
    });
    this.axiosInstance.interceptors.request.use(this.injectToken, (error) => Promise.reject(error));
  }

  private injectToken = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    try {
      if (config.headers && this.apiKey) {
        config.headers['Authorization'] = `${this.apiKey}`;
        config.headers['x-company-id'] = `${this.companyId}`
      }
      return config;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  public post = async <T>(url: string, data: any) => {

    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  public get = async <T>(url: string = '') => {

    const response = await this.axiosInstance.get<T>(url);
    return response.data;
  }
}

export default HttpConfig;
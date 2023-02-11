import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import IHttpConfig from "./http.config.interface";

class HttpConfig implements IHttpConfig {
  private apiKey: string;
  private companyId: string;
  private axiosInstance: AxiosInstance;

  constructor(apiKey: string, companyId: string) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.axiosInstance = axios.create({
      baseURL: 'https://connect-dev-api.upside.coop/'
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
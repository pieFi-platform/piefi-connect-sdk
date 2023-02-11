interface IHttpConfig {
  post: <T>(url: string, data: any) => Promise<T>;
  get: <T>(url: string) => Promise<T>;
}

export default IHttpConfig;
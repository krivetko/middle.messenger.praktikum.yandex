type Options = {
    method?: METHOD,
    data?: any,
    timeout?: number,
    headers?: Record<string, string>
}

export enum METHOD {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
};

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(url: string = '/', options?: Options): Promise<Response> {
    return this.request<Response>(this.endpoint + url, { ...options, method: METHOD.GET });
  } 

  put = (url: string, options: Options) => this.request(url, { ...options, method: METHOD.PUT });

  post = (url: string, options?: Options) => this.request(url, { ...options, method: METHOD.POST });

  delete = (url: string, options: Options) => this.request(url, { ...options, method: METHOD.DELETE });
  
  private request<Response>(url: string, options: Options): Promise<Response> {
    const { method, headers } = options;
    let { data } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.open(method!, url);
      if (headers) {
        Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]));
      }
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.onabort = () => reject({reason: 'abort'});
      xhr.onerror = () => reject({reason: 'error'});
      xhr.ontimeout = () => reject({reason: 'timeout'});
      
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

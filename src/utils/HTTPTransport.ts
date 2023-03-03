interface Options {
    method: string,
    data?: any,
    timeout?: number,
    headers?: Record<string, string>
}

const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE'
};

/**
* Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
* На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
* На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify(data: object): string {
    let keyValues: string[] = [];
    for (const [key, value] of Object.entries(data)) {
        keyValues.push(`${key}=${value}`);
    }
    return '?'+keyValues.join('&');
}

export class HTTPTransport {
    get = (url: string, options: Options) => {
      return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };
    
    put = (url: string, options: Options) => {
      return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url: string, options: Options) => {
      return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete = (url: string, options: Options) => {
      return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
    request = (url: string, options: Options, timeout: number = 5000) => {
      const {method, headers} = options;
      let {data} = options;
      data = queryStringify(data);
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        if (method === METHODS.GET && data) {
          url = url + data;
        }
        xhr.open(method, url);
        if (headers) {
            Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
        }
        xhr.timeout = timeout;
  
        xhr.onload = function() {
          resolve(xhr);
        };

        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
  
        if (method === METHODS.GET && !data) {
          xhr.send();
        } else {
          xhr.send(data);
        }
      });
    };
}
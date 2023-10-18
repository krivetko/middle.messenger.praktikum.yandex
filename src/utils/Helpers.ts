export function queryStringify(data: object): string {
    const keyValues: string[] = [];
    for (const [key, value] of Object.entries(data)) {
      keyValues.push(`${key}=${value}`);
    }
    return `?${keyValues.join('&')}`;
}

type Indexed<T = unknown> = {
    [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    let mergedKeys: string[] = [];
    for (const [key, value] of Object.entries(lhs)) {
      if (rhs.hasOwnProperty(key)) {
          if (Object.keys(value as Indexed).length > 0) {
              lhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
          }
          mergedKeys.push(key);
      }
    }
    for (const key of Object.keys(rhs)) {
      if (!(mergedKeys.includes(key))) {
          Object.assign(lhs as Indexed, rhs as Indexed);
      }
    }
    return lhs;
}
  
export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
      if (typeof path !== 'string') {
          throw new Error('path must be string');
      }
      if (path.length === 0) {
          throw new Error('path must be more than 0 symbols length')
      }
    if ((object as Indexed).constructor !== Object) {
          return object;
      }
      const keys: string[] = path.split('.');
      let key = keys.pop();
      let objectToMerge: Indexed = {[key!]: value};
      while (key = keys.pop()) {
          objectToMerge = {[key]: objectToMerge};
      }
      object = merge(object as Indexed, objectToMerge);
      console.log(object);
      return object;
}

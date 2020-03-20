/* const throttleFn = require("lodash.throttle"); */
import * as _ from 'lodash';


export function throttle(milliseconds: number = 0, options = {}): any {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = _.throttle(originalMethod, milliseconds, options);
    return descriptor;
  };
}

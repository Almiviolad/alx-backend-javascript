const weakMap = new WeakMap();
export { weakMap };
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
      const val = weakMap.get(endpoint);
      if (val >= 5) {
          throw Error('Endpoint load is high');}
      weakMap.set(endpoint, val + 1);
  }

  return weakMap;
}

const weakMap = new WeakMap();
export { weakMap };
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const val = weakMap.get(endpoint);
    weakMap.set(endpoint, val + 1);
    if (val + 1 >= 5) {
      throw Error('Endpoint load is high');
    }
  }

  return weakMap;
}

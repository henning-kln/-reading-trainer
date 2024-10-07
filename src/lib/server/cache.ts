const cache = new Map();
export function setCache(key:string, value:string[]|string|number) {
  cache.set(key, value);
}
export function getCache(key:string) {
  return cache.get(key);
}
export function deleteCache(key:string) {
  cache.delete(key);
}
export function clearCache() {
  cache.clear();
}
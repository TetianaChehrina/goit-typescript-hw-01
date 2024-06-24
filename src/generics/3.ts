function merge<T extends object, O>(objA: T, objB: O) {
  return Object.assign(objA, objB);
}

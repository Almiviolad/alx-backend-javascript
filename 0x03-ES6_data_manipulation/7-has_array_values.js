export default function hasValuesFromArray(set, array) {
  let bool = true;
  for (const elem of array) {
    bool = set.has(elem);
  }
  return bool;
}

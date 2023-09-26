/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array) {
    arr.push(appendString + value);
  }

  return arr;
}

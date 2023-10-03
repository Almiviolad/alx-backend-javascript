export default function cleanSet(set, startString) {
  let string = '';
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      string += elem.slice(startString.length);
      string = `${string}-`;
    }
  }
  string = string.slice(0, -1);
  return string;
}

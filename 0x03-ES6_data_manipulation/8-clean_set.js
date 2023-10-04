export default function cleanSet(set, startString) {
  const setArray = [...set];
  if (startString === '') {
    return '';
  }
  const filteredArray = setArray.filter((element) => element.startsWith(startString));
  const string = filteredArray.map((value) => value.slice(startString.length));
  const resultString = string.join('-');
  return resultString;
}

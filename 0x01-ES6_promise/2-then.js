/* eslint-disable no-unused-expressions */
export default function handleResponseFromAPI(promise){
  return promise.then((obj) => { obj; })
    .catch((Error) => { Error(); })
    .finally(() => { console.log('Got a response from the API'); });
}

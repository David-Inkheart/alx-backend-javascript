// This function has three handlers: one for success,
// one for failure, and the finally block.

export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log({ status: 200, body: 'Success' });
  },
  promise.catch(() => {
    (Error());
  },
  promise.finally(() => {
    console.log('Got a response from the API');
  })));
}

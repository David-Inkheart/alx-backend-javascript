// This function has three handlers: one for success,
// one for failure, and a log. The log is always called for revery "resolution" (resolve).

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(() => new Error());
}

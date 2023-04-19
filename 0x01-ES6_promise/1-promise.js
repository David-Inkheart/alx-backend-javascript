// This function returns a promise given a boolean as a parameter.

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    }
    reject(new Error('The fake API is not working currently'));
  });
}

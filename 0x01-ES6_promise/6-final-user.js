// function calls the two other functions. When the promises are
// 'all settled' it returns an array of the results.

/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        arr.push({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
        });
      });
        console.log(arr);
        return arr;
    });
}

// Import uploadPhoto and createUser from utils.js
// Write an async function named asyncUploadUser that will call these two functions
// and return an object with the following format
// If one of the async function fails, return an empty object. Example:

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  return { photo, user };
}

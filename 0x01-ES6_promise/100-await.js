// Import uploadPhoto and createUser from utils.js
// Write an async function named asyncUploadUser that will call these two functions
// and return an object with the following format

import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo && user) {
    return { photo, user };
  }
  return { photo: null, user: null };
}

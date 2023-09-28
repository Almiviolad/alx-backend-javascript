import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(photoResult.body, userResult.firstName, userResult.lastName);
    })
    .catch(() => { console.log('Signup system offline'); });
}

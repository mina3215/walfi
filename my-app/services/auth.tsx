import postData from './util-fetch';

export default async function RequestLogin(
  formData: FormData
) {
  const data = Object.fromEntries(formData);
  const response = await postData({ url: '/user/login', data });
  return response;
};
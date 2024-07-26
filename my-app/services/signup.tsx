import { requestPost } from '@/utils/http-common';

export default async function RequestSignup(
  formData: FormData
) {
  const data = Object.fromEntries(formData);
  const response = requestPost('/user/signup', data);
  return response;
};
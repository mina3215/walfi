import { requestPost } from '@/utils/http-common';

export default async function RequestLogin(
  formData: FormData
) {
  const data = Object.fromEntries(formData);
  const response = requestPost('/user/login', data);
  return response;
};
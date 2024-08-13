import { requestPost } from '@/utils/http-common';
import { getToken } from '@/utils/localstorage';

export async function RequestLogin(
  formData: FormData
) {
  const data = Object.fromEntries(formData);
  const response = requestPost('/user/login', data);
  return response;
};

export async function validateToken() {
  const data = getToken();
  const response = requestPost('/token/validate/access');
  console.log(response);

  // return response;
}
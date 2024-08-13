import { requestPost } from '@/utils/http-common';

export default async function RequestAccount() {
  const response = await requestPost('/account');
  return response;
};
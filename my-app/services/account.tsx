import { requestPost } from '@/utils/http-common';

export default async function RequestAccount() {
  const account = localStorage.getItem('account');

  if (!account) {
    throw new Error('No data found in LocalStorage');
  }

  const data = {
    "userMainAccount": account
  };
  const response = requestPost('/account', data);
  return response;
};
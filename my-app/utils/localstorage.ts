
export function getToken() {
  if (typeof window !== 'undefined') {
    // console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  return undefined
}

export function setToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token',token)
  }
}

export function getAccount() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('account');
  }
  return undefined;
}

export function setAccount(account: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('account', account);
  }
}

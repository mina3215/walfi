
export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
}

export function setToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token',token)
  }
}




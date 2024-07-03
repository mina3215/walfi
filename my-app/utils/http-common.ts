import axios from 'axios';


const customAxios = axios.create({
  baseURL: 'http://localhost:8094',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const requestGet = async (url:string, params = {}) => {
  // const token = 'Bearer ' + await retrieveData();
  const data = await customAxios.get(url, {
    params,
    headers: {
      // Authorization: token
    }
  })
  return data;
}

export const requestPost = async (url:string, body = {}, headers = {}) => {
  // const token = 'Bearer ' + await reetrieveData();
  const data = await customAxios.post(url, body,
    {
      headers: {
        ...headers
        // Authorization: token
      }
    });
  return data;
}
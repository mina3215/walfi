import axios from 'axios';
import { getToken } from './localstorage';


const customAxios = axios.create({
  baseURL: 'http://localhost:8094',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const requestGet = async (url:string, params = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjM4NTU2MjQsImlhdCI6MTcyMzg1NTYyNCwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.Jv7p1o8zlnCdXl1vUXGulE9iM9-u15P-mLr4luxbmgg';
  const data = await customAxios.get(url, {
    params,
    headers: {
      Authorization: token
    }
  })
  return data;
}

export const requestPost = async (url:string, body = {}, headers = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjM4NTU2MjQsImlhdCI6MTcyMzg1NTYyNCwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.Jv7p1o8zlnCdXl1vUXGulE9iM9-u15P-mLr4luxbmgg';
  const data = await customAxios.post(url, body,
    {
      headers: {
        ...headers,
        Authorization: token
      }
    }).then(res => res.data);
  return data;
}
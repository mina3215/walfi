import axios from 'axios';
import { getToken } from './localstorage';


const customAxios = axios.create({
  baseURL: 'http://localhost:8094',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const requestGet = async (url:string, params = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjM4MzIwMTEsImlhdCI6MTcyMzgzMjAxMSwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.jJpBc7Bn3Myy8o0Aw8dmD0SEfsjp50plbqqcHx6fWNo';
  const data = await customAxios.get(url, {
    params,
    headers: {
      Authorization: token
    }
  })
  return data;
}

export const requestPost = async (url:string, body = {}, headers = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjM4MzIwMTEsImlhdCI6MTcyMzgzMjAxMSwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.jJpBc7Bn3Myy8o0Aw8dmD0SEfsjp50plbqqcHx6fWNo';
  const data = await customAxios.post(url, body,
    {
      headers: {
        ...headers,
        Authorization: token
      }
    });
  return data;
}
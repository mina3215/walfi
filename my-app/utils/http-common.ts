import axios from 'axios';
import { getToken } from './localstorage';


const customAxios = axios.create({
  baseURL: 'http://localhost:8094',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const requestGet = async (url:string, params = {}) => {
  // console.log(getToken());
  // const token = 'Bearer ' + getToken();
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjAzNTQ5OTAsImlhdCI6MTcyMDM1NDk5MCwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.r5okbstvxzIQzt5fpDTfPbjmtbq2A47cf5ygiFOxaT4'
  const data = await customAxios.get(url, {
    params,
    headers: {
      Authorization: token
    }
  })
  return data;
}

export const requestPost = async (url:string, body = {}, headers = {}) => {
  // const token = 'Bearer ' + await reetrieveData();
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjAzNTQ5OTAsImlhdCI6MTcyMDM1NDk5MCwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.r5okbstvxzIQzt5fpDTfPbjmtbq2A47cf5ygiFOxaT4'
  const data = await customAxios.post(url, body,
    {
      headers: {
        ...headers,
        Authorization: token
      }
    });
  return data;
}
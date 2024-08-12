import axios from 'axios';
import { getToken } from './localstorage';


const customAxios = axios.create({
  baseURL: 'https://d87f-118-131-69-35.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const requestGet = async (url:string, params = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjA4MDM1NDYsImlhdCI6MTcyMDgwMzU0NiwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.Bm17P1Qbp-Uxf-EPVpV4c4z5rJO5wyV_inBC8UbDutw';
  const data = await customAxios.get(url, {
    params,
    headers: {
      Authorization: token
    }
  })
  return data;
}

export const requestPost = async (url:string, body = {}, headers = {}) => {
  const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjA4MDM1NDYsImlhdCI6MTcyMDgwMzU0NiwidXNlcklkIjoic3NhZnkiLCJuYW1lIjoic3NhZnkifQ.Bm17P1Qbp-Uxf-EPVpV4c4z5rJO5wyV_inBC8UbDutw';
  const data = await customAxios.post(url, body,
    {
      headers: {
        ...headers,
        Authorization: token
      }
    });
  return data;
}
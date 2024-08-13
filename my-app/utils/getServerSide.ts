import { requestGet } from './http-common';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type ResProps = {
  
}


export default async function getServerSideProps(url:string) {
  const data = await requestGet(url);
  const props = data?.data?.data;

  return {
    props
  };
}
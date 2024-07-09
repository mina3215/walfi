"use client";

import { validateToken } from '@/services/auth';
import LoginedPage from './logined-page';
import LogoutedPage from './logouted-page'


export default function Home() {
  const isLogined = validateToken();
  // const isLogined = true;
  console.log(isLogined);
  return (
    <div>
      {/* {isLogined?<LoginedPage/>:<LogoutedPage/>} */}
    </div>
  )
}


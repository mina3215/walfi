'use client';

import Link from 'next/link';
import style from '@/ui/login/login.module.css'
import { useState } from 'react';

export default function LoginTab() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex items-center justify-center pt-10 pb-16'>
      <Link 
        href='/login/smart-login' 
        onClick={() => {
          if (isActive === false) setIsActive(!isActive)
        }}
        className={isActive ? style.active : style.inactive}
      >스마트 로그인</Link>
      <Link 
        href='/login' 
        onClick={() => {
          if (isActive === true) setIsActive(!isActive)
        }}
        className={isActive ? style.inactive : style.active}
      >ID / 비밀번호</Link>
    </div>
  );
}
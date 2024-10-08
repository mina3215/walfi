'use client';

import React from 'react';
import style from '@/ui/global.module.css';
import SideNav from '@/ui/sidenav';
import useRequireAuth from '@/hooks/useRequireAuth';

const title = '이체'
const links = [
  { name: '계좌 이체', href: '/account-transfer' },
  { name: '예약 이체', href: '/account-transfer/reservation'}
];

export default function Layout({ children }: { children: React.ReactNode }) {
  useRequireAuth();
  
  return (
    <div className={style.container}>
      <div className='flex'>
        <div>
          <SideNav title={title} links={links} />
        </div>
        <div className='w-full'>
          {children}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import style from '@/ui/global.module.css';
import SideNav from '@/ui/sidenav';

const title = '금융상품'
const links = [
  { name: '금융상품 조회', href: '/financial-items' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <div className='flex'>
        <div>
          <SideNav title={title} links={links} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
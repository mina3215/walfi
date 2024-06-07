import LoginNotice from '@/ui/login/login-notice';
import LoginTab from '@/ui/login/login-tab';
import React from 'react';
import style from '@/ui/global.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <LoginTab />
      <div>
        {children}
      </div>
      <LoginNotice />
    </div>
  )
}
import LoginNotice from '@/ui/login/login-notice';
import LoginTab from '@/ui/login/login-tab';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <LoginTab/>
      <div>{children}</div>
      <LoginNotice/>
    </main>
  )
}
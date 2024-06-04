import LoginNotice from '@/ui/login/login-notice';
import LoginTab from '@/ui/login/login-tab';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-screen'>
      <LoginTab />
      <div className='flex-1'>
        <div className='h-40'>
          <div>
            {children}
          </div>
        </div>
      </div>
      <LoginNotice />
    </main>
  )
}
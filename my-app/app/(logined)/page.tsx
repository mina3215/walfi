import type { Metadata } from 'next';
import { LoginedPhrase } from '@/ui/home/phrase';
import AccountBox from '@/ui/home/account-box';
import AccountList from '@/ui/home/account-list';

export const metadata: Metadata = {
  title: 'WALFI',
}

export default function LoginedPage() {
  return (
    <main className='bg-blue-100'>
      <div id='main-info' className='w-[1080px] mx-auto'>
        <div id='main-phrase'>
          <LoginedPhrase/> 
        </div>
        <div id='main-account-service' className='flex'>
          <AccountBox />
          <AccountList />
        </div>
      </div>
    </main>
  );
}
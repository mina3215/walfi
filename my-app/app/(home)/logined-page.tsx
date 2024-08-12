import { LoginedPhrase } from '@/ui/home/phrase';
import AccountBox from '@/ui/home/account-box';
import AccountList from '@/ui/home/account-list';
import CardWrapper from '@/ui/home/card-wrapper';
// import { cookies } from 'next/headers'


export default function LoginedPage() {
  // console.log(cookies().getAll())
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
        <div id='recommand-product' className='mt-36'>
          <p>박민아 고객님께 추천하는 상품입니다.</p>
          <CardWrapper/>
        </div>
      </div>
    </main>
  );
}
import { LoginedPhrase, RecommandPharase, PharaseBox } from '@/ui/home/phrase';
import AccountBox from '@/ui/home/account-box';
import AccountList from '@/ui/home/account-list';
import CardWrapper from '@/ui/home/card-wrapper';

export default function LoginedPage() {
  return (
    <main className='bg-blue-100 w-full'>
      <div id='main-info' className='w-[1080px] mx-auto'>
        <div id='main-phrase'>
          <PharaseBox component={LoginedPhrase}/>
        </div>
        <div id='main-account-service' className='flex items-end'>
          <AccountBox />
          <AccountList />
        </div>
        <div id='recommand-product' className='mt-36'>
          <PharaseBox component={RecommandPharase}/>
          <CardWrapper/>
        </div>
      </div>
    </main>
  );
}
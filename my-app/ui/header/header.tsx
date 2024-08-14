import Link from 'next/link';
import WalfiLogo from '../walfi-logo';
import IconsWrapper from './header-icons';
import HeaderNav from './headernav';
import { LoginButton } from '../buttons';

export default function Header() {
  return (
    <>
      <div id='logo-icons' className='relative flex justify-between w-[1280px] mx-auto'>
        <div>
          <Link href='/'>
            <WalfiLogo />
          </Link>
          <LoginButton/>
        </div>
        <IconsWrapper />
      </div>
      <div className='border-y'>
        <HeaderNav />
      </div>
    </>

  )
}
import Link from 'next/link';
import WalfiLogo from '../walfi-logo';
import IconsWrapper from './header-icons';
import HeaderNav from './headernav';
import SolidStar from '../../public/solidstar.svg';

export default function Header() {
  return (
    <>
      <div className='relative flex justify-between w-[1280px] mx-auto'>
        <Link href='/'>
          <WalfiLogo />
        </Link>
        <IconsWrapper />
      </div>
      <div className='border-y'>
        <HeaderNav />
      </div>
    </>

  )
}
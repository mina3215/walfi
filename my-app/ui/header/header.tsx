import Link from 'next/link';
import WalfiLogo from '../walfi-logo';
import IconsWrapper from './header-icons';

export default function Header() {
  return (
    <div className='relative flex justify-around py-4'>
      <Link href='/'>
        <WalfiLogo />
      </Link>
      <IconsWrapper />
    </div>
  )
}
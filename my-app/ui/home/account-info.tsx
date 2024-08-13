'use client';
import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Account from '@/types/account-props';

export default function AccountListInfo({ account }: Account) {
  const { 계좌번호: number, 구분: type, 잔액원화: money } = account;
  const router = useRouter();
  return (
    <div key={number} className='border-b-2 flex justify-between items-end px-[10px] text-2xl'>
      <p>{type}<br />{number}</p>
      <div className='flex flex-col items-end'>
        <ChevronRightIcon className='flex  w-8 cursor-pointer' onClick={()=>router.push('/')}  />
        <p className='text-blue-650 font-semibold'>{money}</p>
      </div>
    </div>
  )
}
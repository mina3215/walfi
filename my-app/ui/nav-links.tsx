'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: '조회', href: '/',
    list: [
      { name: '계좌 조회', href: '/', list: ['통장 조회', '외화 통장 조회'] },
      { name: '거래 내역 조회', href: '/', list: [] }
    ]
  },
  {
    name: '이체', href: '/',
    list: [
      { name: '계좌 이체', href: '/', list: [] },
      { name: '예약 송금', href: '/', list: [] }
    ]
  },
  {
    name: '외환', href: '/',
    list: [
      { name: '환율', href: '/', list: [] },
      { name: '거래 내역 조회', href: '/', list: ['인터넷 환전 신청', '환전 내역 조회'] }
    ]
  },
  {
    name: '금융 상품', href: '/',
    list: [
      { name: '상품 가입', href: '/', list: [] },
    ]
  },
  {
    name: 'MY', href: '/',
    list: [
      { name: '소비 데이터 분석', href: '/', list: [] },
      { name: '보유 중인 캐릭터', href: '/', list: [] },
    ]
  },
]



export function HeaderNavLink() {
  const pathname = usePathname();
  return (
    <div className='flex'>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex w-[100px] items-center mx-10 md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </div>
  )
}
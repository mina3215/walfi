'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useBooleanState } from '@/hooks/useBooleanState';
import { DropMenu } from './accordian';
import { MenuProps } from '@/types/menu-list';
import { useEffect, useRef, useState } from 'react';

const links: MenuProps[] = [
  {
    name: '조회', href: '/check',
    list: [
      {
        name: '계좌 조회', href: '/', list: [
          '통장 조회', '외화 통장 조회']
      },
      { name: '거래 내역 조회', href: '/', list: [] }
    ]
  },
  {
    name: '이체', href: '/account-transfer',
    list: [
      { name: '계좌 이체', href: '/', list: [] },
      { name: '예약 송금', href: '/', list: [] }
    ]
  },
  {
    name: '외환', href: '/exchange',
    list: [
      { name: '환율', href: '/', list: [] },
      { name: '거래 내역 조회', href: '/', list: ['인터넷 환전 신청', '환전 내역 조회'] }
    ]
  },
  {
    name: '금융상품', href: '/financial-items',
    list: [
      { name: '상품 가입', href: '/', list: [] },
    ]
  },
  {
    name: 'MY', href: '/my',
    list: [
      { name: '소비 데이터 분석', href: '/', list: [] },
      { name: '보유 중인 캐릭터', href: '/', list: [] },
    ]
  },
]



export function HeaderNavLink() {
  const pathname = usePathname();

  const [isOpen, setOpen] = useBooleanState(false);
  const overIdx = useRef(0);

  const isOver = (idx: number) => {
    overIdx.current = idx;
    setOpen.off();
    setOpen.on();
  }

  return (
    <div className='flex w-[1280px] mx-auto justify-around items-center font-bold' >
      {links.map((link, idx) => {
        return (
          <div className='flex justify-center w-[100px] h-[40px]' onMouseLeave={setOpen.off} onMouseOver={() => isOver(idx)}>
            <Link
              key={idx}
              href={link.href}
              className={clsx(
                'flex w-[100px] p-2 mx-auto justify-center items-center',
                {
                  'absolute text-center align-middle bg-blue-750 text-white h-[50px] w-[80px] z-10 top-[70px]': isOpen && idx == overIdx.current
                },
              )}
            >
              <p className='hidden md:block select-none'>{link.name}</p>
            </Link>

            {/* {isOpen && idx == overIdx.current &&
              <DropMenu sublinks={link.list} />} */}
          </div>
        )
      })}
      <Bars3Icon className='size-8 w-[100px] cursor-pointer' />
    </div>
  )
}
'use client';

import { ProductProps } from '@/types/product-props';
import Image from 'next/image'
import rateImg from '@/public/img/product-img.png'
import useTimerState from '@/hooks/useTimerState';

export default function ItemDetail({detail}:{detail:ProductProps}) {
  const { name, baseRate, addRate, period, info } = detail;
  const timer = useTimerState();
  return (
    <div id='item-details' className='flex flex-col justify-between py-5 px-10 border-2 border-blue-400 bg-blue-50 w-full h-[400px]'>
      <div id='item-detail' className='flex justify-between pt-10'>
        <div className='text-slate-500'>
          <p id='title' className='font-bold text-blue-600 pb-10 text-3xl'> {name} </p>
          <p id='info' className='pb-8'>{info}</p>
          <p id='type'>상품종류  :  정기 적금</p>
          <p id='customer'>가입대상  :  개인 부문</p>
          <p id='period'>가입기간  :  {period}</p>
          <p id='money'>가입금액  :  1천원 부터 50만원</p>
        </div>
        <div id='rate-img' className='flex flex-col pr-5 items-center'>
          <Image src={rateImg} alt="상품 상세 페이지 공통 이미지" width={200} height={200} />
          <p className='font-bold text-2xl'>
            <span className=' text-orange-500'>{baseRate}</span> ~ 
            <span className='text-orange-500'>{Math.floor((baseRate + addRate * 12) * 10) / 10}</span>
            %
          </p>
          <p>
            {`${timer} 기준`}
          </p>
        </div>
      </div>
      <div id='detail-icons' className='border-t-2 border-slate-300 p-2'>
        마음, 공유 아이콘
      </div>
    </div>
  )
}
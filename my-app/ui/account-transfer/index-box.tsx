import React from 'react';
import { IndexStyleProps } from '@/types/menuprops';
import style from '@/ui/account-transfer/transfer.module.css';

export default function IndexBox({activeIndex}: IndexStyleProps) {
  return (
    <div className='flex py-4 px-5 border border-white rounded-r-md bg-gray-50'>
      <div className='px-1'>
        <div className={`${style.indexbox} ${activeIndex === '01' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          01
        </div>
      </div>
      <div className='px-1'>
        <div className={`${style.indexbox} ${activeIndex === '02' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          02
        </div>
      </div>
      <div className='px-1'>
        <div className={`${style.indexbox} ${activeIndex === '03' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
          03
        </div>      
      </div>
    </div>
  )
}
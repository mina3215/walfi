'use client';

import style from '@/ui/global.module.css';
import signup from '@/ui/signup/signup.module.css';
import Link from 'next/link';

export default function SignUpForm() {
  return (
    <form>
      <div className='flex items-center justify-center p-10'>
        <div className='py-10'>
          <div className='flex items-center py-2'>
            <input 
              className={`${signup.inputBox} pr-24 mx-2`}
              type='id'
              placeholder='아이디'
              required
            />
            <button
              type='button'
              className={`${style.btn} border-[3px] py-2 px-10 mx-2`}
            >중복확인</button>
          </div>
          <div className='py-2'>
            <input 
              className={`${signup.inputBox} pr-4 mx-2`}
              type='password'
              placeholder='비밀번호'
              required
            />
            <input 
              className={`${signup.inputBox} pr-4 mx-2`}
              type='password'
              placeholder='비밀번호 확인'
              required
            />
          </div>
          <div className='py-2'>
            <input 
              className={`${signup.inputBox} pr-4 mx-2`}
              type='text'
              placeholder='이름'
              required
            />
            <input 
              className={`${signup.inputBox} pr-24 mx-2 text-gray-400`}
              type='date'
              required
            />      
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Link
          href='/login'
          className={`${style.btn} py-4 px-12 mx-2`}
        >로그인으로</Link>
        <button
          type='button'
          className={`${style.btn} py-4 px-12 mx-2`}
        >확인</button>
      </div> 
    </form>
  )
}
'use client';

import style from '@/ui/login/login.module.css'
import Link from 'next/link';

export default function LoginForm() {
  return (
    <form>
      <div className='flex items-center justify-center'>
        <div>
          <div className='pb-2'>
            <input 
              className={style.inputBox}
              type='id'
              placeholder='아이디'
              required
            />
          </div>
          <div className='pt-2'>
            <input 
              className={style.inputBox}
              type='password'
              placeholder='비밀번호'
              required
            />
          </div>
        </div>
        <div className='pl-3'>
          <button 
            type='button'
            className={`${style.btn} border-2 px-10 py-10`}
          >로그인</button>
        </div>
      </div>
      <div className='flex justify-end py-4'>
        <Link
          href='/signup'
          className='border border-gray-300 py-1 px-4 text-gray-400 text-[12px]'
        >회원가입</Link>
      </div>
    </form>
  )
}
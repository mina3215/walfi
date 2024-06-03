'use client';

import style from '@/ui/login/login.module.css'

export default function LoginForm() {
  return (
    <form>
      <div className='flex items-center justify-center'>
        <div>
          <div className='pb-2'>
            <input 
              className={style.inputBox}
              id='id'
              type='id'
              name='id'
              placeholder='아이디'
              required
            />
          </div>
          <div className='pt-2'>
            <input 
              className={style.inputBox}
              id='password'
              type='password'
              name='password'
              placeholder='비밀번호'
              required
            />
          </div>
        </div>
        <div className='pl-3'>
          <button 
            type='button'
            className='border-2 border-blue-500 bg-blue-500 text-white px-10 py-10'
          >로그인</button>
        </div>
      </div>
      <div className='flex justify-end py-4'>
        <button 
          type='button'
          className='border border-gray-300 py-1 px-4 text-gray-400 text-[12px]'
        >회원가입</button>
      </div>
    </form>
  )
}
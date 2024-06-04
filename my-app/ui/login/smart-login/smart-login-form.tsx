'use client';

import style from '@/ui/login/login.module.css';

function LockClosed() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

export default function SmartLoginForm() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div>
          <div className='text-[20px] font-semibold text-gray-600 py-2'>
            <span className='text-blue-500'>WALFI모바일앱</span>과 연동하여 로그인 할 수 있습니다.
          </div>
          <div className='flex justify-center items-center pt-10 pb-6'>
            <button
              type='button'
              className={`${style.btn} border py-4 px-20 flex items-center justify-center`}
            >
              <LockClosed />
              <p className='px-2'>간편뱅킹 로그인</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
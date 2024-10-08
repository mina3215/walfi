'use client';

import { useMutation } from '@tanstack/react-query';
<<<<<<< HEAD
import {RequestLogin} from '@/services/auth';
import style from '@/ui/global.module.css'
=======
import RequestLogin from '@/services/auth';
import style from '@/ui/global.module.css';
>>>>>>> 7d798bffb1f5daf02ad17f24dfb9e142cd228989
import { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setToken, setAccount } from '@/utils/localstorage';

function LoginButton() {
  return(
    <div className='pl-3'>
      <button 
        type='submit'
        className={`${style.btn} border-2 px-10 py-10`}
      >로그인</button>
    </div>
  );
}

export default function LoginForm() {
  const router = useRouter();
  
  const mutation = useMutation({
    mutationKey : ['login'],
    mutationFn: RequestLogin,
    onSuccess: (data) => {
      setToken(data.headers['access-token']);
      setAccount(data.data.data.userMainAccount);
      router.push('/');
    },
    onError: (error) => {
      console.error(error, '실패')
      alert("아이디와 비밀번호를 다시 확인해주세요.");
    }
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  }
  
  return (
    <form onSubmit={onSubmit} className='flex items-center justify-center'>
      <div>
        <div className='flex items-center justify-center'>
          <div>
            <div className='pb-2'>
              <input 
                className={style.inputBox}
                id='id'
                name='userId'
                type='id'
                placeholder='아이디'
                required
              />
            </div>
            <div className='pt-2'>
              <input 
                className={style.inputBox}
                id='password'
                name='password'
                type='password'
                placeholder='비밀번호'
                required
              />
            </div>
          </div>
          <LoginButton/>
        </div>
        <div className='flex justify-end py-4'>
          <Link
            href='/signup'
            className='border border-gray-300 py-1 px-4 text-gray-400 text-[12px]'
          >회원가입</Link>
        </div>
      </div>
    </form>
  );
}
'use client';

import style from '@/ui/global.module.css';
import signup from '@/ui/signup/signup.module.css';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import RequestSignup from '@/services/signup';

export default function SignUpForm() {
  const router = useRouter();
  const mutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: RequestSignup,
    onSuccess: () => {
      router.push('/login');
    },
    onError: (error) => {
      console.error(error, '실패')
    }
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const passwordCheck = formData.get('passwordCheck') as string;

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    
    mutation.mutate(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='flex items-center justify-center p-10'>
        <div className='py-10'>
          <div className='flex items-center py-2'>
            <input 
              className={`${signup.inputBox} pr-24 mx-2`}
              id='id'
              name='userId'
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
              id='password'
              name='password'
              type='password'
              placeholder='비밀번호'
              required
            />
            <input 
              className={`${signup.inputBox} pr-4 mx-2`}
              id='passwordCheck'
              name='passwordCheck'
              type='password'
              placeholder='비밀번호 확인'
              required
            />
          </div>
          <div className='py-2'>
            <input 
              className={`${signup.inputBox} pr-4 mx-2`}
              id='name'
              name='name'
              type='text'
              placeholder='이름'
              required
            />
            <input 
              className={`${signup.inputBox} pr-24 mx-2 text-gray-400`}
              id='birthDate'
              name='birthDate'
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
          type='submit'
          className={`${style.btn} py-4 px-12 mx-2`}
        >확인</button>
      </div> 
    </form>
  );
}
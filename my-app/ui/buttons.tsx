'use client'
import { useRouter } from 'next/navigation';

export function LoginButton() {
  const router = useRouter();
  return (
    <div className='py-3'>
      <button className='bg-gray-200 border border-black h-8 px-2' onClick={()=>router.push('/login')}>
        로그인
      </button>
    </div>
  )
}

export function anotherbutton() {
  return (
    <div>
      <button>

      </button>
    </div>
  )
}
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

export function Blue500Button({ buttonLabel, className }: {
  buttonLabel: string,
  className : string
}) {
  const router = useRouter();

  return (
    <div>
      <button id='button' className={`bg-blue-500 text-white ${className}`}>
        {buttonLabel}
      </button>
    </div>
  )
}

export function Gray400Button({ buttonLabel }: { buttonLabel: string }) {
  const router = useRouter();
  return (
    <div>
      <button className='bg-gray-400 text-white p-2'>
        {buttonLabel}
      </button>
    </div>
  )
}
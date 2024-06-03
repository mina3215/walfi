import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center'>
      스마트 로그인페이지다
    </div>
  )
}
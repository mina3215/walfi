import SmartLoginForm from '@/ui/login/smart-login/smart-login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center'>
      <SmartLoginForm />
    </div>
  )
}
import LoginForm from '@/ui/login/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
}

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
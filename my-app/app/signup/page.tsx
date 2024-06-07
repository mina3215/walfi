import SignUpForm from "@/ui/signup/signup-form";
import { Metadata } from "next";
import style from '@/ui/global.module.css';

export const metadata: Metadata = {
  title: '회원가입',
}

export default function SignUpPage() {
  return (
    <div className={style.container}>
      <SignUpForm />
    </div>
  );
}
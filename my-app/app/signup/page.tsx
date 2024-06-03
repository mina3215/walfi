import SignUpForm from "@/ui/signup/signup-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center'>
      <SignUpForm />
    </div>
  )
}
'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, [router])
};

export default useRequireAuth;
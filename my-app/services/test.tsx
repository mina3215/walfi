"use client";

import { useQuery } from '@tanstack/react-query';

interface User{
  userId: string,
  email?: string,
  name?: string,
  birthDate?: string,
  phoneNumber?: string,
  userMainAccount?: string
}

async function getInfo() {
  return (
    await fetch("https://d87f-118-131-69-35.ngrok-free.app/user").then(
      (res) => res.json()
  ))as User[]
}

export default function Home() {
  const { data } = useQuery({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getInfo(),
    staleTime: 5*100,
  })

  

  console.log(data);

  return (
    <div>

    </div>
  );
}

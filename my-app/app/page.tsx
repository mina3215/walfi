"use client";

import { useQuery } from '@tanstack/react-query';

interface User{
  userId: string,
  email?: string,
  namee?: string,
  birthDate?: string,
  phoneNumber?: string,
  userMainAccount?: string
}

async function getInfo() {
  return (
    await fetch("http://localhost:8094/user").then(
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

// export default function Page() {
//   return <div>
//     <p>home1</p>
//   </div>
// }
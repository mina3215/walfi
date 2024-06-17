'use client'

import { RecoilRoot } from 'recoil';
// import Providers from '@/utils/provider';

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecoilRoot>
    {children}
    {/* <Providers>{children}</Providers> */}
  </RecoilRoot>
}
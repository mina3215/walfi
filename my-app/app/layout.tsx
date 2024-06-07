import './globals.css'
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/ui/header/header'
import RecoilRootProvider from '../utils/recoilRootProvider';
// import HeaderNav from '@/ui/headernav';

export const metadata: Metadata = {
  title: 'WALFI',
  description: "WALFI's web version",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
        </div>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  )
}
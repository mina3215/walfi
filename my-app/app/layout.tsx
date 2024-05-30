import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RecoilRootProvider from '../utils/recoilRootProvider'
import Header from '@/ui/header'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Graphy',
  description: 'Project Share platform',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <Header/>
      </head>
      <body className={inter.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </>
  )
}
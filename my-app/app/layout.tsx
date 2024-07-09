import './globals.css'
import { Metadata } from 'next';
import Header from '@/ui/header/header'
import RecoilRootProvider from '../utils/recoilRootProvider';


export const metadata: Metadata = {
  title: {
    template: '%s | WALFI',
    default: 'WALFI',
  },
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
        <RecoilRootProvider>
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
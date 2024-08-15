import type { Metadata } from 'next';
import Providers from './components/Providers';
import './globals.css';
import { ReactNode } from 'react';
import TopNav from './components/navbar/TopNav';

export const metadata: Metadata = {
  title: 'NextMatch',
  description: 'NextMatch is a simple app to manage your matches'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <TopNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Providers from './components/Providers';
import './globals.css';
import { ReactNode } from 'react';
import TopNav from './components/navbar/TopNav';

export const metadata: Metadata = {
    title: 'DatePulse',
    description: 'DatePulse is a simple app to manage your matches'
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <TopNav />
                    <main className='container mx-auto'>{children}</main>
                </Providers>
            </body>
        </html>
    );
}

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextMatch',
  description: 'NextMatch is a simple app to manage your matches'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

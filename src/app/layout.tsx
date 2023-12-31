import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import './globals.css';

// const inter = Inter({ subsets: ['latin'] })

import localFont from 'next/font/local';

const FiraCodeFont = localFont({
  src: [
    {
      path: '../fonts/FiraCode-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../fonts/FiraCode-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FiraCode-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/FiraCode-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../fonts/FiraCode-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Nikita Nikitin',
  description: 'iOS | Android | Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={FiraCodeFont.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

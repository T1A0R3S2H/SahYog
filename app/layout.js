// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWithHooks from './LayoutWithHooks';
import SessionWrapper from '@/components/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Sahayog - A support website',
  description: 'This website is a crowdfunding website for developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/main-logo.png" />
      </head>
      <body className={inter.className}>
        <SessionWrapper>
        <LayoutWithHooks>{children}</LayoutWithHooks>
        </SessionWrapper>
      </body>
    </html>
  );
}

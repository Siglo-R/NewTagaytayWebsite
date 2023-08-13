"use client"
import React from 'react';
import HeaderBar from './Component/HeaderBar';
import { Inter } from 'next/font/google';
import { UserLocationProvider } from '@/context/UserLocationContext';
import { BusinessContext, BusinessContextProvider } from '@/context/BusinessContext'; // Updated import
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <BusinessContextProvider>
      <UserLocationProvider>
        <LayoutContent>{children}</LayoutContent>
      </UserLocationProvider>
    </BusinessContextProvider>
  );
}

function LayoutContent({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}

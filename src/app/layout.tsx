'use client';

import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
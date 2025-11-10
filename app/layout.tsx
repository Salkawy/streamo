import './globals.css';
import React from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'Next Streaming Starter',
  description: 'Modern × Luxury streaming starter with Next.js + Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-bg">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

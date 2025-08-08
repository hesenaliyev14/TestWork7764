import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce App',
  description:
    'A modern e-commerce application with user authentication and product catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

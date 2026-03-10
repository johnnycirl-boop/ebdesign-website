import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EBdesign | Accelerating SE Ireland Businesses',
  description: 'Professional consulting & business acceleration for the South East of Ireland. Based in Kilkenny, helping established and growing businesses thrive.',
  openGraph: {
    title: 'EBdesign | Accelerating SE Ireland Businesses',
    description: 'Professional consulting & business acceleration for the South East of Ireland.',
    url: 'https://ebdesign.ie',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

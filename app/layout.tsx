import ScrollToTopButton from '../components/ScrollToTopButton';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GroowByTech',
  description: 'Reliable websites, Ready for You.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
         <ScrollToTopButton />
      </body>
    </html>
  );
}

import Footer from '../components/layouts/footer/Footer';
import Header from '../components/layouts/header/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Providers } from '../providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GroowByTech',
  description: 'Reliable websites, Ready for You.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
        {children}
        <Footer />
         <ScrollToTopButton />
        </Providers>
        
      </body>
    </html>
  );
}

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReactNode } from 'react';
import '@/styles/globals.css'
import  { Metadata }  from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import NavBar from '@/modules/navbar/NavBar';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300'], 
  variable: '--main-font',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--secondary-font',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LOOKBOOK",
  description: "find your style based on your tastex",
};



export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {




  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

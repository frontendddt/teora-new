
import { AnimationProvider } from '@/context/AnimationContext';
import { Archivo, Roboto, Roboto_Condensed} from 'next/font/google';

import "@/styles/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapClient from '@/components/bootstrap/BootstrapClient'; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from '@/lib/db';
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata = {
  title: 'Teora',
  icons: {
    icon: '/favicon.png',
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'], 
  variable: '--font-archivo',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100',  '300', '400', '500', '600', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100',  '300', '400', '600', '700'],
  variable: '--font-roboto-condensed',
});

export default async function RootLayout({ children }) {

    let footerSections = [];

    try {
      const [sectionsRows] = await db.query(`
        SELECT id, title, position FROM footer_sections ORDER BY position
      `);

      const [linksRows] = await db.query(`
        SELECT id, section_id, label, url, position FROM footer_links
      `);

      footerSections = sectionsRows.map((section) => ({
        ...section,
        links: linksRows
          .filter((link) => link.section_id === section.id)
          .sort((a, b) => a.position - b.position),
      }));
    } catch (error) {
      console.error('Error loading footer data:', error); 
      footerSections = [];
    }

  return (
    <html lang="en" className={`${archivo.variable} ${roboto.variable} ${roboto_condensed.variable}`}>  
      <body>
        <AnimationProvider>  
          <Header/> 
              <main>
                    {children}
                    <ToastContainer/>
              </main> 
          <Footer sections={footerSections}/> 
       </AnimationProvider>  
         <BootstrapClient/>
      </body>
    </html>
    
  );
}


import '../styles/globals.css';

import { Raleway, IBM_Plex_Sans, Antonio } from 'next/font/google';
import localFont from 'next/font/local';

const raleway = Raleway({ subsets: ['latin'] });
const ibmSans = IBM_Plex_Sans({
  weight: '700',
  subsets: ['latin'],
});

const antonio = Antonio({
  subsets: ['latin'],
  variable: '--antonio-font',
});

const cooper = localFont({
  src: [
    {
      path: '../public/fonts/cooperhewitt-book-webfont.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/cooperhewitt-bold-webfont.woff2',
      weight: '700',
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --ibmSans-font: ${ibmSans.style.fontFamily};
          --cooper-font: ${cooper.style.fontFamily};
        }
      `}</style>
      <div className={`${antonio.variable} font-cooper`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

import '../styles/globals.css';

import {
  Raleway,
  IBM_Plex_Sans,
  Antonio,
  Dancing_Script,
  Oswald,
  Merriweather,
} from '@next/font/google';
import localFont from '@next/font/local';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const oswald = Oswald({ subsets: ['latin'] });
const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

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
          --oswald-font: ${oswald.style.fontFamily};
          --merriweather-font: ${merriweather.style.fontFamily};
          --dancingScript-font: ${dancingScript.style.fontFamily};
        }
      `}</style>
      <div className={antonio.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

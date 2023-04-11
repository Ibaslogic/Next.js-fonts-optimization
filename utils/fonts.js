import {
  Dancing_Script,
  Oswald,
  Merriweather,
} from 'next/font/google';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });
export const oswald = Oswald({ subsets: ['latin'] });

export const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

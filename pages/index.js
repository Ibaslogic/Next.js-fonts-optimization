import Layout from '../components/Layout';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.oswald}>
        <h1 className={styles.dancingScript}>Home page</h1>
        <p className={styles.merriweather}>
          This text uses a non variable font
        </p>
        <p>This paragraph uses another font</p>
      </div>
      <p>This text should take global styles</p>
    </Layout>
  );
}

// import {
//   Dancing_Script,
//   Oswald,
//   Merriweather,
// } from '@next/font/google';
// import Layout from '../components/Layout';

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
// });

// const oswald = Oswald({ subsets: ['latin'] });
// const merriweather = Merriweather({
//   weight: ['300', '400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });

// export default function Home() {
//   return (
//     <Layout>
//       <div className={oswald.className}>
//         <h1 className={dancingScript.className}>Home page</h1>
//         <p className={merriweather.className}>
//           This text uses a non variable font
//         </p>
//         <p>This paragraph uses another font</p>
//       </div>
//       <p>This text should take global styles</p>
//     </Layout>
//   );
// }

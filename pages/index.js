import Layout from '../components/Layout';
import { dancingScript, oswald, merriweather } from '../utils/fonts';

export default function Home() {
  return (
    <Layout>
      <div className={oswald.className}>
        <h1 className={dancingScript.className}>Home page</h1>
        <p className={merriweather.className}>
          This text uses a non variable font
        </p>
        <p>This paragraph uses another font</p>
      </div>
      <p>This text should take global styles</p>
    </Layout>
  );
}

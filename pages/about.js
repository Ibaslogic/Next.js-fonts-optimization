import Layout from '../components/Layout';
import styles from './About.module.css';

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About page</h1>
        <p className={styles.text}>This is about page content</p>
      </div>
    </Layout>
  );
};

export default About;

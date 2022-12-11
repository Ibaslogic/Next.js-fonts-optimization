import Layout from '../components/Layout';
import styles from './Contact.module.css';

const contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact page</h1>
        <p>This is contact content uses a local font</p>
      </div>
    </Layout>
  );
};

export default contact;

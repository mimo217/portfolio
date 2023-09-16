import React from 'react';
import Layout from '../../components/Layout/Layout'
import styles from './Home.scss';

function Home() {
  return (
    <Layout>
      <main className={styles['main-content']}>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page of my dynamic portfolio.</p>
      </main>
    </Layout>
  );
}

export default Home;

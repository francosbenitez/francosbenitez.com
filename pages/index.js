import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Footer from '../components/Footer';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <Container>
    <div className={styles.container}>
      <Head>
        <title>Franco Sebastián Benítez</title>
        <meta name="description" content="Data, design, and development." />
        <meta name="keywords" content="francosbenitez data design development" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Footer />
    </div>
    </Container>
  )
}

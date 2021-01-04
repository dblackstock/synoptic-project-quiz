import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1>Welcome to QZ, the quiz application</h1>
        <h2>Log in to get started (not yet implemented)</h2>
      </main>
      <Footer />
    </div>
  );
}

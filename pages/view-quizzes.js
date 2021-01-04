import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ViewQuizzes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1>View Quizzes</h1>
        <h2>Pick a quiz to view questions</h2>
      </main>
      <Footer />
    </div>
  );
}

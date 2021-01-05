import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { UserProvider, useFetchUser } from "../utils/user";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <div className={styles.container} data-testid="home-page">
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} loading={loading} />

      <main className={styles.main}>
        <h1>Welcome to QZ, the quiz application</h1>
        <UserProvider value={{ user, loading }}>
          {user != null && loading === false ? (
            <h2>Pick one of the options in the top bar to start the quiz!</h2>
          ) : (
            <h2>Log in to get started</h2>
          )}
        </UserProvider>
      </main>
      <Footer />
    </div>
  );
}

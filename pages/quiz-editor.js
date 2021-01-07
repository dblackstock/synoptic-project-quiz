import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useFetchUser } from "../utils/user";
import displayQuizNamesAsButtons from "../functions/displayQuizNamesAsButtons";
import quizStyles from "../styles/ViewQuizzes.module.css";

export default function QuizEditor({ quizzes }) {
  const { user, loading } = useFetchUser();
  return (
    <div className={styles.container} data-testid="home-page">
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav user={user} loading={loading} />
      <main className={quizStyles.quiztitleswrap}>{displayQuizNamesAsButtons(quizzes)}</main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const resultsList = await fetch("http://localhost:3000/api/get-quizzes");
  const formattedResults = await resultsList.json();
  return { props: { quizzes: formattedResults } };
}

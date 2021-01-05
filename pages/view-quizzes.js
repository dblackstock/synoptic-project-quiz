import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import quizStyles from "../styles/ViewQuizzes.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import retrieveQuizNamesAsButtons from "../functions/retrieveQuizNamesAsButtons";

export default function ViewQuizzes() {
  return (
    <div className={homeStyles.container} data-testid="view-quiz-page">
      <Head>
        <title>QZ Quizzes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={quizStyles.quizwrap}>{retrieveQuizNamesAsButtons()}</main>
      <Footer />
    </div>
  );
}

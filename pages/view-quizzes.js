import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import quizStyles from "../styles/ViewQuizzes.module.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import retrieveQuizNamesAsButtons from "../functions/retrieveQuizNamesAsButtons";
import Router from "next/router";
import { useFetchUser } from "../utils/user";

export default function ViewQuizzes() {
  const { user, loading } = useFetchUser();
  if (loading === true) {
    return <div className={homeStyles.loading}>Loading</div>;
  } else if (user === null && loading === false) {
    Router.replace("/");
    return <div className={homeStyles.loading}>Loading</div>;
  }
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
